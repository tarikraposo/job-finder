import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = "https://jobdataapi.com/api/jobs/?country_code=BR"

  constructor(private client: HttpClient) {

  }

  getCountry(): Observable<any> {
    return this.client.get(this.apiUrl)
  }

}
