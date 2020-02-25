import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
@NgModule({
  declarations: [WorkExperienceComponent,
    SkillsComponent],
  imports: [CommonModule],
  exports: [WorkExperienceComponent, SkillsComponent]
})
export class KnowledgeModule { }
