import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';

const routes: Routes = [
  { path: 'personaldetails', component: PersonalDetailsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'workexperience', component: WorkExperienceComponent },
  { path: 'contactdetails', component: ContactDetailsComponent },
  { path: 'balancetransfer', component: BalanceTransferComponent },
  { path: '', redirectTo: 'personaldetails', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }