import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ContainerComponent } from './container/container.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SocMedComponent } from './soc-med/soc-med.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    ContainerComponent,
    WorksComponent,
    ContactComponent,
    AboutComponent,
    SkillsComponent,
    NavComponent,
    HomeComponent,
    SocMedComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
