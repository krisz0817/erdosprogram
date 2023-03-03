import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { GalleryImagesService } from 'src/app/services/galleryimages/galleryimages.service';
import { UploadFilesComponent } from '../upload-files/upload-files.component';

@Component({
  selector: 'app-admin-modify-gallery',
  templateUrl: './admin-modify-gallery.component.html',
  styleUrls: ['./admin-modify-gallery.component.scss']
})
export class AdminModifyGalleryComponent implements OnInit {

  @ViewChild(UploadFilesComponent) uploadFiles:any;

  id: any;
  gallery: any = {
    id: 0,
    year: 0,
    title: '',
    images: [],
    createdAt: new Date,
    updatedAt: new Date
  };
  deletedImages: Array<any>;

  constructor(private galleryService: GalleryService, private activatedRoute: ActivatedRoute, private galleryimagesService: GalleryImagesService, private router: Router) {
    this.deletedImages = new Array;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];

      this.galleryService.getById(this.id).subscribe((response)=>{
        this.gallery = response[0];
        console.log(this.gallery);
      })
    });
  }

  removeFromArray(index: any) {

    this.deletedImages.push(this.gallery.images[index]);
    this.gallery.images.splice(index, 1);
  }

  modify() {
    for(let img of this.deletedImages) {
      this.galleryimagesService.delete({method: "DELETE", id: img.id}).subscribe((response: any) => {

      })
    }
    for(let img of this.uploadFiles.progressInfos) {
      console.log(img.fileName);
      this.galleryimagesService.create({method: "POST", name: "https://erdosprogram.hu:8443/api/galeria/"+img.fileName, gallery_id: this.id}).subscribe((response: any) => {
          console.log(response);
      })
    }
    this.router.navigate(["/admin/gallery"]);
  }
}
