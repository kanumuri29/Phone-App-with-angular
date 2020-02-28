import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PhoneService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getPhoneList(phoneNumber: String): Observable<any> {

    let url = this.baseUrl+'phoneList/'+phoneNumber;
    console.log(url);
    return this.http.get(url);
  }



}
