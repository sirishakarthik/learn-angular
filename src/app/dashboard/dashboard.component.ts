import { Component, OnInit } from '@angular/core';

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
    this.Projects = ['Project A', 'Project B', 'Project C'];
    this.TeamMembersSummary = [
      { Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: 'North', TeamMembersCount: 30, TemporarilyUnavailableMembers: 4 },
      { Region: 'South', TeamMembersCount: 30, TemporarilyUnavailableMembers: 4 },
      { Region: 'West', TeamMembersCount: 40, TemporarilyUnavailableMembers: 6 }];


  }

}
