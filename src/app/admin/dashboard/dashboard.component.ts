import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  Clients: string[];
  Projects: string[];
  TeamMembersSummary = [];
  Years: number[] = [];
  TeamSummary = [];
  constructor(private dashboardservice: DashboardService) {


  }
  ngOnInit() {
    this.Designation = 'Team Member';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 86;
    this.PendingTasks = 10;
    this.ProjectCost = 280000;
    this.TotalCostOfAllProjects = 251000;
    this.AvailableFunds = 530000;
    this.CurrentExpenditure = 260000;
    this.UpcomingProjects = 10;
    this.Clients = ['ABC Infotech', 'DEF techno', 'GHI industries'];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    for (var i = 2020; i >= 2010; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardservice.getTeamMembersSummary();
    this.TeamSummary = [{
      Region: 'East', Members: [
        { ID: 1, Name: 'Robert', Status: 'Available' },
        { ID: 2, Name: 'Ryan', Status: 'Busy' }
      ]
    },

    {
      Region: 'West', Members: [{ ID: 1, Name: 'Sirisha', Status: 'Available' },
      { Id: 2, Name: 'Saurav', Status: 'Busy' }]
    },
    {
      Region: 'North', Members: [{ ID: 1, Name: 'Sirisha', Status: 'Available' },
      { ID: '2', Name: 'Saurav', Status: 'Busy' }]
    },
    {
      Region: 'South', Members: [{ ID: 1, Name: 'Jack', Status: 'Available' },
      { ID: 2, Name: 'John', Status: 'Busy' }]
    }

    ];
  }
  onProjectChange($event) {

    if ($event.target.innerHTML === 'Project A') {
      this.ProjectCost = 85000;
      this.CurrentExpenditure = 2500;
      this.AvailableFunds = 4200;
    }
    else if ($event.target.innerHTML === 'Project B') {

      this.ProjectCost = 72000;
      this.CurrentExpenditure = 4600;
      this.AvailableFunds = 3900;

    }
    else if ($event.target.innerHTML === 'Project C') {

      this.ProjectCost = 79000;

      this.CurrentExpenditure = 5600;

      this.AvailableFunds = 3900;


    } else if ($event.target.innerHTML === 'Project D') {
      this.ProjectCost = 72000;

      this.CurrentExpenditure = 4600;

      this.AvailableFunds = 3900;
    }

  }






}
