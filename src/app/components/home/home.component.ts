import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselItems = [
    { image: 'file:///home/unthinkable-lap/Downloads/Tropiko%20Free%20Website%20Template%20-%20Free-CSS.com/tropiko-html/images/slide-img.png', caption: 'Caption 1' },
    { image: 'file:///home/unthinkable-lap/Downloads/Tropiko%20Free%20Website%20Template%20-%20Free-CSS.com/tropiko-html/images/slide-img.png', caption: 'Caption 2' },
    // Add more items as needed
  ];

}
