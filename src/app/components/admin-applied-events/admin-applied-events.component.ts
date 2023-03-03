import {AfterViewInit, Component, ViewChild, OnInit, ViewChildren, QueryList} from '@angular/core';
import { Router } from '@angular/router';

//table imports
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { UserEventService } from 'src/app/services/user_event/user_event.service';
import { EventService } from 'src/app/services/event/event.service';
import { StatusService } from 'src/app/services/status/status.service';
import { Apply } from 'src/app/models/user_event.interface';
import { EventInterFace } from 'src/app/models/event.interface';
import { EmailService } from 'src/app/services/email/email.service';
import { UserService } from 'src/app/services/user/user.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { GlobalvarsService } from 'src/app/services/globalvars/globalvars.service';
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { event } from 'jquery';

@Component({
  selector: 'app-admin-applied-events',
  templateUrl: './admin-applied-events.component.html',
  styleUrls: ['./admin-applied-events.component.scss']
})
export class AdminAppliedEventsComponent implements OnInit {


  @ViewChildren('cmp') textEditors:QueryList<TextEditorComponent>;
  @ViewChild(UploadFilesComponent) uploadFiles:any;
  //_baseUrl2 = "http://192.168.32.25:8080/api/files/";
  _baseUrl2 = "http://192.168.32.25:8080/api/files/";

  displayedColumns: string[] = ['select', 'name', 'email', 'price', 'status'];
  dataSource = new MatTableDataSource<Apply>();
  selection = new SelectionModel<Apply>(true, []);
  events: EventInterFace[];
  selectedEvent: any;
  statuses: any;
  mailText : any;
  attachment : any;
  emailArea1:any;
  emailArea2:any;
  friday: any = 0;
  saturday: any = 0;
  //selectedEventStatus: any;

  constructor(private router: Router, private http: HttpClient, private globalarService : GlobalvarsService, private userEventService: UserEventService, private emailService: EmailService, private eventService: EventService, private statusService: StatusService, private userService: UserService) {
    eventService.getAll().subscribe((response: any)=>{
      this.events = response.reverse();
      this.selectedEvent = this.events[0].id;
      statusService.getStatuses().subscribe((response2: any)=>{
        this.statuses = response2;
        this.loadData();
      })

    })

   }

   loadData(){
    this.selection.clear();
    this.userEventService.getEvent(this.selectedEvent).subscribe((response: Apply[])=>{
      response.forEach((element: any)=>{
        if(element.friday_room) {
          this.friday++;
        }
        if(element.saturday_room) {
          this.saturday++;
        }
        element.status = this.statuses.find((status: any)=>{
          return status.id==element.status_id;
        }).name;
      })
      this.dataSource.data = response.reverse();
    })
   }

  ngOnInit(): void {
    this.emailArea1 = document.getElementById("emailArea1");
    this.emailArea2 = document.getElementById("emailArea2");
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Apply): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.user_id}_${row.event_id}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete() {
    this.selection.selected.forEach(element => {
      this.userEventService.delete(element.user_id, element.event_id).subscribe((response:any)=> {
          this.loadData();
      })
    });
  }


  export() {
    let Heading = [['Email', 'Vezetéknév', 'Keresztnév', 'Állapot',
    'Péntek ebéd', 'Péntek vacsora',
    'Szombat reggeli', 'Szombat ebéd', 'Szombat vacsora',
    'Vasárnap reggeli', 'Vasárnap ebéd',
    'Péntek szállás', 'Szombat szállás',
    'Összeg', 'Számlázási név', 'Számlázási cím', 'Megjegyzés',
    'Iskola', 'Osztály', 'Oktató'
    ]];
    const datepipe: DatePipe = new DatePipe('en-US')
    let fileName = this.events.find((element:any)=>{return element.id==this.selectedEvent?element:null})!.name.replace(/\s+/g, '_').toLowerCase() + "_" +datepipe.transform(new Date(), 'YYYY-MM-dd hh_mm') +".xlsx";
    const wb = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(ws, Heading);
    let arr :any[] = [];
    this.dataSource.filteredData.forEach((element:any)=>{
      arr.push({email:element.email,
        firstname: element.firstname,
        lastname:element.lastname,
        status: element.status,
        friday_lunch: element.friday_lunch,
        friday_dinner: element.friday_dinner,
        saturday_breakfast: element.saturday_breakfast,
        saturday_lunch: element.saturday_lunch,
        saturday_dinner: element.saturday_dinner,
        sunday_breakfast: element.sunday_breakfast,
        sunday_lunch: element.sunday_lunch,
        friday_room: element.friday_room,
        saturday_room: element.saturday_room,
        price: element.price,
        billing_name: element.billing_name,
        billing_address: element.billing_address,
        comment: element.comment,
        school_name: element.name,
        class: element.class,
        teacher: element.teacher
      })
    })
    ws['!cols'] = [{wch:12}, {wch:12}, {wch:20}, {wch:10}, {wch:12}, {wch:12}, {wch:14}, {wch:14}, {wch:15}, {wch:15}, {wch:14}, {wch:12}, {wch:14}, {wch:8}, {wch:18}, {wch:30}, {wch:50}]
    XLSX.utils.sheet_add_json(ws, arr, { origin: 'A2', skipHeader: true });
    XLSX.utils.book_append_sheet(wb, ws, "Jelentkezett diákok");
    XLSX.writeFile(wb, fileName);
  }

  send(){
    if(this.emailArea1.style.display == "block"){
      this.emailArea1.style.display = "none";
      this.emailArea2.style.display = "none";
    }else{
      if(this.selection.selected.length != 1) {
        console.log("Túl sok kijelölve!");
      } else {
        this.globalarService.getAllVariable().subscribe((res:any)=>{
          this.mailText = res.find((element:any)=>{return element.variable=="billing_email"}).value;
          this.textEditors.toArray()[0].textEditor.content = this.mailText;
        })
        this.emailArea1.style.display = "block";
        this.emailArea2.style.display = "none";
      }
    }
  }
  sendMails(){
    if(this.emailArea2.style.display == "block"){
    this.emailArea1.style.display = "none";
    this.emailArea2.style.display = "none";
    }else{
      this.emailArea2.style.display = "block";
      this.emailArea1.style.display = "none";
    }
  }

  sendEmail(){
    if(this.selection.selected.length != 1) {
      console.log("Túl sok kijelölve!");
    } else {
      this.mailText = this.textEditors.toArray()[0].textEditor.content;
      this.attachment = this.uploadFiles.progressInfos[0].fileName;
      this.emailService.sendMail(this.selection.selected[0].email, this.mailText, this.attachment).subscribe((resp2: any)=>{
        console.log(resp2);
      })
    }
    this.emailArea1.style.display = "none";
    this.emailArea2.style.display = "none";
  }

  sendGroupEmail(){
    this.selection.selected.forEach(element => {
      this.mailText = this.textEditors.toArray()[1].textEditor.content;
      this.emailService.sendGroupMail(element.email, this.mailText).subscribe((resp2: any)=>{
        console.log(resp2);
      })
    });
    this.emailArea1.style.display = "none";
    this.emailArea2.style.display = "none";
  }

  activate(){
    this.selection.selected.forEach(element => {
      if(element.status_id == 1) {
        element.status_id = 2;
        element.status = "Jóváhagyva";
        this.userEventService.activate(element.user_id, element.event_id).subscribe((response:any) => {
          this.emailService.sendEventAccept({email: element.email}).subscribe((resp2: any)=>{

          })
        })
      }
    });
  }

  deactivate(){
    this.selection.selected.forEach(element => {
      element.status_id = 3;
      element.status = "Tiltva";
      this.userEventService.deactivate(element.user_id, element.event_id).subscribe((response:any) => {
        this.emailService.sendEventDisable({email: element.email}).subscribe((resp2: any)=>{

        })
      })
    });
  }

  deactivate2() {
    this.eventService.deactivate(this.selectedEvent).subscribe((response:any) => {
    })
  }

  selectorChange() {
    this.loadData();
    //this.selectedEventStatus = this.events[this.events.indexOf(this.selectedEvent)].status;
    //console.log(this.events[this.events.find(i => i.id === this.selectedEvent)].status);
  }

}


