import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items = [
    {name: 'Typescript', icon: 'info', route: ['', 'basic']},
    {name: 'Typescript', icon: 'info', route: ['', 'typescript']},
    {name: 'Typescript', icon: 'info', route: ['', 'typescript']},
    {name: 'Typescript', icon: 'info', route: ['', 'typescript']},
    {name: 'Typescript', icon: 'info', route: ['', 'typescript']},
    {name: 'Typescript', icon: 'info', route: ['', 'typescript']},
    {name: 'Typescript', icon: 'info', route: ['', 'typescript']},
  ];

  constructor() { }

  ngOnInit() {
  }

}
