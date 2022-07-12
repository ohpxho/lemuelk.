import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { AboutMe } from '../custom-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  @Input() aboutme: AboutMe = {
    title: '',
    headline: '',
    desc: ''
  };	

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
}
