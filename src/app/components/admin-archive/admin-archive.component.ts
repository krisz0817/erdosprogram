import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//table imports
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { elementAt } from 'rxjs';
import { ArchiveService } from 'src/app/services/archive/archive.service';
import { Archive } from 'src/app/models/archive.interface';

@Component({
  selector: 'app-admin-archive',
  templateUrl: './admin-archive.component.html',
  styleUrls: ['./admin-archive.component.scss']
})
export class AdminArchiveComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'title', 'page_real_name', 'createdAt'];
  dataSource = new MatTableDataSource<Archive>();
  selection = new SelectionModel<Archive>(true, []);

  constructor(private router: Router, private http: HttpClient, private archiveService: ArchiveService) {
    this.selection.clear();
    archiveService.getAll().subscribe((response)=>{
      this.dataSource.data = response.reverse();
      const datepipe: DatePipe = new DatePipe('en-US')
      this.dataSource.data.forEach((article:any) => {
        article.createdAt = datepipe.transform(article.createdAt, 'YYYY. MM. dd.');
        article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.');
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
  checkboxLabel(row?: Archive): string {
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
      this.archiveService.delete({method:"DELETE", id:element.id}).subscribe((response:any)=> {
        this.selection.clear();
        this.archiveService.getAll().subscribe((res)=>{
          this.dataSource.data = res.reverse();
          const datepipe: DatePipe = new DatePipe('en-US')
          this.dataSource.data.forEach((article:any) => {
            article.createdAt = datepipe.transform(article.createdAt, 'YYYY. MM. dd.');
            article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.');
          });
        })
      })
    });
  }

  activate(){
    this.selection.selected.forEach(element => {
      this.archiveService.activate({method:"ACTIVATE", id:element.id}).subscribe((response:any)=> {
        this.selection.clear();
        this.archiveService.getAll().subscribe((res)=>{
          this.dataSource.data = res.reverse();
          const datepipe: DatePipe = new DatePipe('en-US')
          this.dataSource.data.forEach((article:any) => {
            article.createdAt = datepipe.transform(article.createdAt, 'YYYY. MM. dd.');
            article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.');
          });
        })
      })
    });

  }

}
