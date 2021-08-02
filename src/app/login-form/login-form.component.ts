import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { User } from './../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() existingUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  signIn(form: NgForm){
    console.log(form.value);
    this.existingUser.emit(form.value);
    

  }

}
