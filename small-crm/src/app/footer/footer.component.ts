import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  // 插值表达式
  public footer = '---------footer---------';
  constructor() { }

  ngOnInit(): void {
  }

}
