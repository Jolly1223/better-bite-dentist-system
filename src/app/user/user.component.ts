import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  appointments: boolean = false;
  services: boolean = true;
  treatments: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showAppointments(){
    this.appointments = false;
    this.services = true;
    this.treatments= true;
  }

  showServices(){
    this.services = false;
    this.treatments= true;
    this.appointments = true;
  }

  showTreatments(){
    this.treatments= false;
    this.appointments = true;
    this.services = true;
  }

  login(){
    this.router.navigate(['/login']);
  }
}
