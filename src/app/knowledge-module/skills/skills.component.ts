import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  Skill: string[];
  text: string;
  text2: string;
  text3: string;
  hasDuplicate = true;

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
  ColorChange(input: string, username: string) {
    const element = document.getElementById('skill3');
    if ((username === 'text3') && ((input === this.text2) || (input === this.text))) {
      element.style.color = 'red';
    }
  }
}






