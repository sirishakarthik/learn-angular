import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-module/personal-details/personal-details.component';
import { SkillsComponent } from './knowledge-module/skills/skills.component';
import { WorkExperienceComponent } from './knowledge-module/work-experience/work-experience.component';
import { ContactDetailsComponent } from './personal-module/contact-details/contact-details.component';
import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';
import { ProjectComponent } from './knowledge-module/project/project.component';
import { EmployeeDetailsComponent } from './knowledge-module/employee-details/employee-details.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'personaldetails', component: PersonalDetailsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'workexperience', component: WorkExperienceComponent },
  { path: 'contactdetails', component: ContactDetailsComponent },
  { path: 'balancetransfer', component: BalanceTransferComponent },
  { path: 'projects/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: 'personaldetails', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
