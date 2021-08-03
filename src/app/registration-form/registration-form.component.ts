import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from './../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  @Output() newUser = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createAccount(form: NgForm){
    console.log(form.value);
    this.newUser.emit(form.value);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
