import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule,Route } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, HeaderComponent,TestimonialComponent,ContactComponent]
})
export class AppComponent {
  title = 'FruitHarbor';
    handleFormSubmit(formData: any) {
      // Handle the submitted form data here
      console.log(formData);
    }
  
}
