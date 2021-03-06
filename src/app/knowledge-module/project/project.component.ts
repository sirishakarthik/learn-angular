import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project = [];

  constructor(private projservice: ProjectService, private _router: Router) { }

  ngOnInit() {
    this.projservice.getProject().subscribe(response => this.project = response);
  }

  ClickProj(proj) {
    this._router.navigate(['project', proj.Id]);
  }
}
