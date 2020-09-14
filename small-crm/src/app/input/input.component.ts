import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  isLogin = false;
  newClientForm;

  constructor(
    private userInfo: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient) {
    this.newClientForm = this.formBuilder.group({
      name: '',
      gender: '',
      age: '',
      citizenship: '',
      email: '',
      phone: '',
      address: ''
    });
  }

  ngOnInit(): void {
    if (this.userInfo.snapshot.queryParams.user !== 'admin'){
      console.log('need login');
    }else {
      console.log('welcome ' + this.userInfo.snapshot.queryParams.user);
      this.isLogin = true;
    }
  }

  onSubmit(customerData): void {

    const infoUrl = 'http://localhost:10010';
    console.warn(infoUrl, customerData);
    this.http.post('http://localhost:10010', customerData).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
    this.newClientForm.reset();

  }

}
