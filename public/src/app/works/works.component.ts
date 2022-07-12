import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../custom-types';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  @Input() featuredProj: Array<Project> = [];
  @Input() otherProj: Array<Project> = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
}
