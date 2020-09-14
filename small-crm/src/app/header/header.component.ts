import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public loggedin = false;

  public links = [
    {
      href: '/info',
      name: 'Client Information'
    },
    {
      href: '/input',
      name: 'New Client'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
