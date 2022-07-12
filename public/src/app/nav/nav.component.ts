import { Component, OnInit } from '@angular/core';

declare var changeTheme: any;

function menuToggle(){
    const list: any= document.querySelector('.nav-list');
    let displayState = list.style.opacity;
    if(displayState < 1) {
      list.style.opacity = 1;
      list.style.width = '100%';
    } 
    else {
      list.style.opacity = 0;
      list.style.width = '0';
    }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  theme: string = 'day';
  constructor() { 
    const theme = localStorage.getItem('theme');
    if(theme) this.theme = theme;
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    menuToggle();
  }

  changeWebTheme(theme: string): void{
  	changeTheme(theme);
  	this.theme = theme;
  }
}
