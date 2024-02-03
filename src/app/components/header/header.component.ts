import { Component } from '@angular/core';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonsComponent,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  btn_label:string='Get A quote';
  menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Fruits', link: '#' },
    { label: 'Services', link: '#' },
    { label: 'Contact us', link: '#' }
  ];
  onButtonClick() {}
}
