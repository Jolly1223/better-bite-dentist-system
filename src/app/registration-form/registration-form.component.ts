import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from './../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  @Output() newUser = new EventEmitter();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  createAccount(form: NgForm){
    console.log(form.value);
    this.authService.register(form.value).subscribe(user => {
      alert('Register successfully')
    },errors=>{
      alert("Email address is already existing");
    })
    // this.newUser.emit(form.value);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
