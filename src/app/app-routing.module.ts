import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { ResumeComponent } from './resume/resume.component'

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'resume', component: ResumeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
