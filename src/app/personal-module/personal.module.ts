import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './services/countries.service';


@NgModule({
  declarations: [PersonalDetailsComponent, ContactDetailsComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [PersonalDetailsComponent, ContactDetailsComponent],
  providers: [CountriesService]
})
export class PersonalModule { }
