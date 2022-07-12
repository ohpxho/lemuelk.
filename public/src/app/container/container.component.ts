import { Component, OnInit } from '@angular/core';
import { config } from '../../assets/particle-config';
import { AboutMe, Project, Skill } from '../custom-types';
import { DataService } from '../data.service';

declare let particlesJS: any;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public loader: boolean = true;
  public error: string = '';
  scriptElement: HTMLScriptElement;

  public aboutme = {
    title: '',
    headline: '',
    desc: ''
  };  

  public skills: Array<Skill> = [];
  public featuredProj: Array<Project> = [];
  public otherProj: Array<Project> = [];

  constructor(private data : DataService) { 
    this.scriptElement = document.createElement("script");
  }

  ngOnInit(): void {
    this.setProperty();
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', config, function() {});
  }

  private async setProperty(): Promise<void>{
    this.loader = true;
    await this.getAbout();
    await this.getSkills();
    await this.getProjects();
    this.loader = false;
    this.scriptElement.src = "../../assets/prognav.js";
    document.body.appendChild(this.scriptElement);
  }

  private async getAbout(): Promise<void>{
    await this.data.getAbout().then((about: AboutMe) => {
      this.aboutme.title = about.title;
      this.aboutme.headline = about.headline;
      this.aboutme.desc = about.desc;
    }).catch((err) => {
      this.error = err;
    });
  }

  private async getSkills(): Promise<void>{
    await this.data.getSkills().then((skills: Array<Skill>) => {
      this.skills = skills;
    }).catch((err) => {
      this.error = err;
    });
  }

   private async getProjects(): Promise<void> {
    await this.data.getProjects().then((projects: Array<Project>) => {
      this.featuredProj = projects.filter((project) => project.type == 1);
      this.otherProj = projects.filter((project) => project.type == 0);   
    }).catch((err) => {
      this.error = err;
    });
  }

}
