import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//table imports
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { SchoolService } from 'src/app/services/school/school.service';
import { School } from 'src/app/models/school.interface';

@Component({
  selector: 'app-admin-school',
  templateUrl: './admin-school.component.html',
  styleUrls: ['./admin-school.component.scss']
})
export class AdminSchoolComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'name', 'state'];
  dataSource = new MatTableDataSource<School>();
  selection = new SelectionModel<School>(true, []);

  constructor(private router: Router, private http: HttpClient, private schoolService: SchoolService) {
    this.selection.clear();
    schoolService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response;
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
  checkboxLabel(row?: School): string {
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
      this.schoolService.delete(element.id).subscribe((response:any)=> {
        if(response.hasOwnProperty("error") && response.error.name == "SequelizeForeignKeyConstraintError") {
          console.log("Felhasználó által használatban van!");
        }
        this.selection.clear();
        this.schoolService.getAll().subscribe((response)=>{
          this.dataSource.data = response;
        })
      })
    });
  }

  modify() {
    console.log("Módosítás:");
    if(this.selection.selected.length != 1) {
      console.log("Túl sok kijelölve!");
    } else {
      console.log("Kijelölt elem:");
      console.log(this.selection.selected[0]);
      this.router.navigateByUrl('/admin/modify-school/'+this.selection.selected[0].id);
    }
  }

}
