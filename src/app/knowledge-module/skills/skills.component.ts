import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  Skill: string[];
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.Skill = [];
  }
  goBack() {
    this.router.navigateByUrl('contactdetails');
  }
  goNext() {
    this.router.navigateByUrl('workexperience');
  }
  addSkill() {
    console.log(`skill added`);
  }
  removeSkill() {
    console.log(`skill removed`);
  }
}
