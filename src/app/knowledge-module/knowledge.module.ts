import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { DuplicatefinderService } from './duplicatefinder.service';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
@NgModule({
  declarations: [WorkExperienceComponent,
    SkillsComponent, ProjectComponent],
  imports: [CommonModule, FormsModule],
  exports: [WorkExperienceComponent, SkillsComponent, ProjectComponent],
  providers: [DuplicatefinderService]
})
export class KnowledgeModule { }
