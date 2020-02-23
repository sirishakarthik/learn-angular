import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  Country: string[];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.Country = ['India', 'Australia', 'America', 'Switzerland', 'Nepal'];
  }


  next() {
    this._router.navigateByUrl('skills');
  }

  back() {
    this._router.navigateByUrl('personaldetails');
  }

}
