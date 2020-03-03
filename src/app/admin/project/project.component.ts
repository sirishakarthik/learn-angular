import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Projects } from '../projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [];

  constructor(private ps: ProjectService, private rs: Router) { }

  ngOnInit() {
    this.ps.getProjects()
      .subscribe(response => this.projects = response);
  }
  onClickproj(proj) {
    this.rs.navigate(['project', proj.Id]);
  }
}


