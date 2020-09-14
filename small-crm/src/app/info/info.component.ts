import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from './info.service';
import {HeaderComponent} from '../header/header.component';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  public hasData = false;
  public login = false;

  public infors = [];

  constructor(private userInfo: ActivatedRoute, private service: InfoService) {
  }

  private getInfo(): void {
    this.service.getInfo().subscribe(res => {
      console.log(typeof(res));
      console.log(typeof(res[0]));
      if (res.length >= 0){
        // this.infors = res.data;
        for (let entry of res){
          console.log(entry);
          this.infors.push(entry);
        }
      }
      this.hasData = !!this.infors.length;
      console.log(this.infors);
    });
  }

  ngOnInit(): void {
    if (this.userInfo.snapshot.queryParams.user !== 'admin'){
      this.hasData = false;
    }else {
      this.login = true;
      this.getInfo();
    }

  }
}

