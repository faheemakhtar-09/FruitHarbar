import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CarouselModule,NgForOf],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  @Input() heading: string = '';
  @Input() contents: string = '';
  @Input() testimonial_contents: { id: number; url: string; headings: string; contents: string}[] = [];
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoWidth: true,
    nav: true
  };
  ngOnInit() {}
}