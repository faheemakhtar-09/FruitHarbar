import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf,ButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  btn_label:string="Shop Now"
  btn_label2:string="Contact us"
  btn_label3:string="Read More"
  carouselItems = [
    { image: '../../../assets/images/slide-img.png', heading: ' Welcome to Our Fruits Shop',contents:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
  ];
  shopNow(){}
  services=[
    {image:'../../../assets/images/card-item-1.png',serviceHeading:'Orange',serviceContents:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
    {image:'../../../assets/images/card-item-2.png',serviceHeading:'Grapes',serviceContents:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
    {image:'../../../assets/images/card-item-3.png',serviceHeading:'Gauva',serviceContents:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
  ]
}