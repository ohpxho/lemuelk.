import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Skill } from '../custom-types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  @Input() skills: Array<Skill> = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
