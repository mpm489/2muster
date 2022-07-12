import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['9.jpg', '10.jpg', '14.jpg', '15.jpg'];
 text = [
 'Jagende Adler auf Kaninchen ',
 'Eule nachts auf sein Futter ',
  'Die riesigen Elefanten in der mitte der Strasse',
  'Der schlauer Fuchs untewegs'
 ];
 currentImage = 0;
 showImage = true;

  constructor() { }

  ngOnInit(){
    this.updateImage();
    }
   
    updateImage(){
   
     setInterval(()=>{
       this.currentImage++;
       this.currentImage = this.currentImage % this.images.length;
       this.showImage = false;
   
       setTimeout(()=>{
         this.showImage = true;
       },100);
     },8000);
}
}
