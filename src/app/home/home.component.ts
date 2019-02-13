import { Component, OnInit } from '@angular/core';

import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
 
    if(window.pageYOffset >=80)
    {
      // console.log("Scroll Event", window.pageYOffset );
this.step=87;
    }else
    {
      this.step=0;
    }
  }
}
