import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./utils/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { CvComponent } from "./pages/cv/cv.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FooterComponent } from "./utils/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      HeaderComponent,
      HomeComponent,
      CvComponent,
      ExperienceComponent, 
      ContactComponent, 
      FooterComponent
    ]
})
export class AppComponent { }
