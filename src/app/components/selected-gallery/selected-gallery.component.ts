import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-selected-gallery',
  templateUrl: './selected-gallery.component.html',
  styleUrls: ['./selected-gallery.component.scss']
})
export class SelectedGalleryComponent implements OnInit {

  gallery: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private galleryService: GalleryService) {
    this.gallery = {
      id: 0,
      year: 0,
      title: "",
      images: [

      ]
  }
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
      this.galleryService.getById(this.id).subscribe((response)=>{
        this.gallery = response[0];
      })
    });
  }

}
