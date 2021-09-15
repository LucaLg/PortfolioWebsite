import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.login.value);
  }

}
