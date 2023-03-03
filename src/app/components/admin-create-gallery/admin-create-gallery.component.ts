import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from 'src/app/models/gallery.interface';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImagesService } from 'src/app/services/galleryimages/galleryimages.service';
import { UploadFilesComponent } from '../upload-files/upload-files.component';

@Component({
  selector: 'app-admin-create-gallery',
  templateUrl: './admin-create-gallery.component.html',
  styleUrls: ['./admin-create-gallery.component.scss']
})
export class AdminCreateGalleryComponent implements OnInit {

  @ViewChild(UploadFilesComponent) uploadFiles:any;

  gallery: Gallery = {
    id: 0,
    year: 0,
    title: '',
    images: [],
    createdAt: new Date,
    updatedAt: new Date
  };

  constructor(private galleryService: GalleryService, private galleryimagesService: GalleryImagesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    if(this.gallery.year != null && this.gallery.title != "")
    this.galleryService.create({method: "POST", title: this.gallery.title, year: this.gallery.year}).subscribe((response:any)=>{
      console.log(response.id);
      if(response.id>0) {
        this.gallery.id = response.id;
        for(let img of this.uploadFiles.progressInfos) {
          this.galleryimagesService.create({method: "POST", name: "https://erdosprogram.hu:8443/api/galeria/"+img.fileName, gallery_id: this.gallery.id}).subscribe((resp: any) => {
          })
        }
        this.router.navigateByUrl("/admin/gallery");
      }
    })

  }
}
