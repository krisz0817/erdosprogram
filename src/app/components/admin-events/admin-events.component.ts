import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//table imports
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { elementAt } from 'rxjs';
import { EventService } from 'src/app/services/event/event.service';
import { EventInterFace } from 'src/app/models/event.interface';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'name', 'location', 'start-date', 'end-date', 'status'];
  dataSource = new MatTableDataSource<EventInterFace>();
  selection = new SelectionModel<EventInterFace>(true, []);

  constructor(private router: Router, private http: HttpClient, private eventService: EventService) {
    this.loadData();
   }

   loadData(){
    this.selection.clear();
    this.eventService.getAll().subscribe((response)=>{
      this.dataSource.data = response.reverse();
      const datepipe: DatePipe = new DatePipe('en-US')
      this.dataSource.data.forEach((event:any) => {
        event.createdAt = datepipe.transform(event.createdAt, 'YYYY. MM. dd.');
            event.createdAt = datepipe.transform(event.createdAt, 'YYYY. MM. dd.');
            event.start_date = datepipe.transform(event.start_date, 'YYYY. MM. dd.');
            event.end_date = datepipe.transform(event.end_date, 'YYYY. MM. dd.');
      });
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
  checkboxLabel(row?: EventInterFace): string {
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
      this.eventService.delete(element.id).subscribe((response:any)=> {

      })
    });
    this.loadData();
  }

  modify() {
    if(this.selection.selected.length != 1) {
      console.log("Túl sok kijelölve!");
    } else {
      this.router.navigateByUrl('/admin/modify-event/'+this.selection.selected[0].id);
    }
  }

  new_from_selected() {
    if(this.selection.selected.length != 1) {
      console.log("Túl sok kijelölve!");
    } else {
      this.router.navigateByUrl('/admin/create-event/'+this.selection.selected[0].id);
    }
  }
  activate(){
    this.selection.selected.forEach(element => {
      element.status_id = 2;
      element.status = "Jóváhagyva";
      this.eventService.activate(element.id).subscribe((response:any) => {
      })
    });
  }

  deactivate(){
    this.selection.selected.forEach(element => {
      element.status_id = 3;
      element.status = "Tiltva";
      this.eventService.deactivate(element.id).subscribe((response:any) => {
      })
    });
  }
}
