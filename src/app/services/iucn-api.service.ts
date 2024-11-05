import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.iucnredlist.org/'; 
  private apiToken = 'c5bN92UBwuxrcg2xHgD4yAT3XJSCcUi9y7DH';   

  constructor(private http: HttpClient) {}

  getSomeData() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });
    return this.http.get(`${this.apiUrl}/endpoint`, { headers });
  }
}