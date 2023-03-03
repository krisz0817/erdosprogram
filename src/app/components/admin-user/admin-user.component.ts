import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { EmailService } from 'src/app/services/email/email.service';
import { StatusService } from 'src/app/services/status/status.service';
import { UserService } from 'src/app/services/user/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  displayedColumns: string[] = ['select', 'email', 'firstname', 'lastname', 'role_name', 'status_name'];
  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);
  statuses: any;
  constructor(private router: Router, private http: HttpClient, private userService: UserService, private statusService: StatusService, private emailService: EmailService) {
    statusService.getStatuses().subscribe((response: any)=>{
      this.statuses = response;
    })
    this.loadData();
   }

   loadData(){
    this.selection.clear();
    this.userService.getAll().subscribe((response)=>{
      this.dataSource.data = response.reverse();
      console.log(response);
      for(let user of this.dataSource.data) {
        for(let status of this.statuses) {
          if(status.id==user.status_id) {
            user.status_name = status.name;
          }
        }
      }
    })
   }

  ngOnInit(): void {
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
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete() {
    this.selection.selected.forEach(element => {
      this.userService.delete(element.id).subscribe((response:any)=> {
          this.loadData();
      })
    });
  }

  export() {
    let Heading = [['Email', 'Vezetéknév', 'Keresztnév', 'Jogkör', 'Állapot', 'Iskola', 'Osztály', 'Oktató', 'Nyilatkozat', 'Jelentkezési lap']];
    let fileName = "Felhasználók.xlsx"
    const wb = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(ws, Heading);
    let arr :any[] = [];
    this.dataSource.filteredData.forEach((element:any)=>{
      arr.push({email:element.email,
        lastname:element.lastname,
        firstname: element.firstname,
        role: element.role_name,
        status: element.status_name,
        school_name: element.school_name_1==""?element.school_name_2:element.school_name_1,
        class: element.class,
        teacher: element.teacher,
        file1: element.statement_file,
        file2: element.application_file})
    })
    XLSX.utils.sheet_add_json(ws, arr, { origin: 'A2', skipHeader: true });

    XLSX.utils.book_append_sheet(wb, ws, 'Felhasználók');
    XLSX.writeFile(wb, fileName);
  }

  activate(){
    this.selection.selected.forEach(element => {
      console.log(element);
      if(element.status_id == 1) {
        element.status_id = 2;
        element.status_name = "Jóváhagyva";
        this.userService.activate(element.id).subscribe((response:any) => {
          console.log(response);
          this.emailService.sendActivation({email: element.email}).subscribe((resp: any)=>{
            console.log(resp);
          });
        })
      }
    });
  }

  deactivate(){
    this.selection.selected.forEach(element => {
      if(element.status_id != 3) {
        element.status_id = 3;
        element.status_name = "Tiltva";
        this.userService.deactivate(element.id).subscribe((response:any) => {
          this.emailService.sendDeactivation({email: element.email}).subscribe((resp: any)=>{
            console.log(resp);
          });
        })
      }
    });
  }

}
