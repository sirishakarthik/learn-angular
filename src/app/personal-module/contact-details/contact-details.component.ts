import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  Country: string[];

  constructor(private county: CountriesService, private router: Router) { }


  ngOnInit() {
    this.Country = this.county.getCountries();
  }


  next() {
    this.router.navigateByUrl('skills');
  }

  back() {
    this.router.navigateByUrl('personaldetails');
  }

}
