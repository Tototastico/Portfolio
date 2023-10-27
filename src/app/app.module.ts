import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FillingComponent } from './filling/filling.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { WritingComponent } from './writing/writing.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FillingComponent,
    FooterComponent,
    AboutComponent,
    WorkComponent,
    WritingComponent,
    ContactComponent,
    InicioComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
