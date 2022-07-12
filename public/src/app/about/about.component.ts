import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { AboutMe } from '../custom-types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  @Input() aboutme: AboutMe = {
  	title: '',
  	headline: '',
  	desc: ''
  };

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
}
