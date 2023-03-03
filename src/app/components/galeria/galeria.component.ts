import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  galleries: any;

  constructor(private http: HttpClient, private galleryService: GalleryService) {
    galleryService.getAll().subscribe((response)=>{
      this.galleries = new Array<any>;
      for(let gallery of response) {
        if(this.compare(gallery.year) == -1){
          let pair = new Pair;
          pair.setYear(gallery.year);
          pair.insertGallery(gallery);
          this.galleries.push(pair);
        } else {
          this.galleries[this.compare(gallery.year)].insertGallery(gallery);
        }
      }
      this.galleries = this.galleries.reverse();
    })
  }

  compare(year: number):number {
    for(let element of this.galleries ){
      if(element.getYear() == year) {
        return this.galleries.indexOf(element);
      }
    }
    return -1;
  }

  ngOnInit(): void {
  }

}

class Pair{
  year: number;
  galleries: Array<any>;

  public constructor() {
    this.year = 0;
    this.galleries = new Array;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear(): number {
    return this.year;
  }

  public insertGallery(gallery: any) {
    this.galleries.push(gallery);
  }

  public getGalleries() {
    return this.galleries;
  }

}
