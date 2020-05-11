import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { ResumeComponent } from './resume/resume.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent } from './contact/contact.component'
import { HireComponent } from './hire/hire.component'
import { WorkComponent } from './work/work.component'

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hire', component: HireComponent },
  { path: 'work', component: WorkComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
