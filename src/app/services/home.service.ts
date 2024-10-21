import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // apiUrl = "https://api.github.com/users";
  // apiUrl = "https://jobdataapi.com/api/jobs/?country_code=BR";
  apiUrl = "http://localhost:3000/results"

  constructor(private httpClient: HttpClient) {

  }

  getCountry(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }

}
