import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FillingComponent } from './filling/filling.component';
import { InicioComponent } from './inicio/inicio.component';
import { WorkComponent } from './work/work.component';
import { WritingComponent } from './writing/writing.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'Writing', component: WritingComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Knowledge', component: KnowledgeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
