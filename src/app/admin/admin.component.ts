import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    dashboard:boolean = false;
    showSchedule: boolean = true;
    showAppointment: boolean = true;
    showPatient: boolean = true;
    showServices: boolean = true;
    showTreatment: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showDashboard(){
    this.dashboard = false;
    this.showSchedule = true;
    this.showAppointment =true;
    this.showPatient = true;
    this.showServices = true;
    this.showTreatment = true;
  }
  showSched(){
    this.showSchedule = false;
    this.dashboard = true;
    this.showAppointment =true;
    this.showPatient = true;
    this.showServices = true;
    this.showTreatment = true;
  }

  showAppointments(){
    this.showAppointment = false;
    this.dashboard = true;
    this.showSchedule = true;
    this.showPatient = true;
    this.showServices = true;
    this.showTreatment = true;
  }

  showPatients(){
    this.showPatient = false;
    this.dashboard = true;
    this.showAppointment = true;
    this.showSchedule = true;
    this.showServices = true;
    this.showTreatment = true;
  }

  showService(){
    this.showServices = false;
    this.dashboard = true;
    this.showPatient = true;
    this.showAppointment = true;
    this.showSchedule = true;
    this.showTreatment = true;
  }

  showTreatments(){
    this.showTreatment = false;
    this.dashboard = true;
    this.showServices = true;
    this.showPatient = true;
    this.showAppointment = true;
    this.showSchedule = true;
  }


}
