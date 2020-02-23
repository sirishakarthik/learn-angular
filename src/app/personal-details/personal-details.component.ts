import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  test: any = '123';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('contactdetails');
  }


}
