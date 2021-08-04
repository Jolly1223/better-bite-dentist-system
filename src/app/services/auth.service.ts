import { Injectable } from '@angular/core';
import  { BaseService, httpOptions } from './base.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    private http: HttpClient
  ) { 
    super()
  }

  register(data:any) {
    return this.http.post(`${this.baseUrl}/register`, data, httpOptions)
  }
  
}
