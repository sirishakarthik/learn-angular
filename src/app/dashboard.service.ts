import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getTeamMembersSummary(): any[] {
    const TeamMembersSummary = [
      { Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: 'West', TeamMembersCount: 30, TemporarilyUnavailableMembers: 5 },
      { Region: 'North', TeamMembersCount: 40, TemporarilyUnavailableMembers: 6 },
      { Region: 'South', TeamMembersCount: 50, TemporarilyUnavailableMembers: 7 },
    ];
    return TeamMembersSummary;
  }
}
