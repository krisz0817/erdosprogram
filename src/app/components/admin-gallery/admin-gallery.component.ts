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
import { Gallery } from 'src/app/models/gallery.interface';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'title', 'year'];
  dataSource = new MatTableDataSource<Gallery>();
  selection = new SelectionModel<Gallery>(true, []);

  constructor(private router: Router, private http: HttpClient, private galleryService: GalleryService) {
    this.selection.clear();
    galleryService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response.reverse();
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
  checkboxLabel(row?: Gallery): string {
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
      this.galleryService.delete({method:"DELETE", id:element.id}).subscribe((response:any)=> {
        this.selection.clear();
        this.galleryService.getAll().subscribe((response)=>{
          this.dataSource.data = response.reverse();
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
      this.router.navigateByUrl('/admin/modify-gallery/'+this.selection.selected[0].id);
    }
  }

}
