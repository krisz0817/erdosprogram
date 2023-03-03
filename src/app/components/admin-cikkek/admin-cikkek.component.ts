import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//table imports
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article.interface';
import { DatePipe } from '@angular/common';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-admin-cikkek',
  templateUrl: './admin-cikkek.component.html',
  styleUrls: ['./admin-cikkek.component.scss']
})
export class AdminCikkekComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'title', 'page_real_name', 'createdAt'];
  dataSource = new MatTableDataSource<Article>();
  selection = new SelectionModel<Article>(true, []);

  constructor(private router: Router, private http: HttpClient, private articleService: ArticleService) {
    this.selection.clear();
    articleService.getAll().subscribe((response)=>{
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
  checkboxLabel(row?: Article): string {
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
      this.articleService.delete({method:"DELETE", id:element.id}).subscribe((response:any)=> {
        this.selection.clear();
        this.articleService.getAll().subscribe((response)=>{
          this.dataSource.data = response.reverse();
          const datepipe: DatePipe = new DatePipe('en-US')
          this.dataSource.data.forEach((article:any) => {
            article.createdAt = datepipe.transform(article.createdAt, 'YYYY. MM. dd.');
            article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.');
          });
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
      this.router.navigateByUrl('/admin/modify-article/'+this.selection.selected[0].id);
    }
  }

  new_from_selected() {
    console.log("Új létrehozása kiválasztottból:");
    if(this.selection.selected.length != 1) {
      console.log("Túl sok kijelölve!");
    } else {
      console.log("Kijelölt elem:");
      console.log(this.selection.selected[0]);
      this.router.navigateByUrl('/admin/create-article/'+this.selection.selected[0].id);
    }
  }

}
