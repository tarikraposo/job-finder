import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface JobProps {
  title: string,
  location: string,
  description: string,
  company: string,
  website_url: string,
}


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = "https://jobdataapi.com/api/jobs/?country_code=BR";
  // 

  constructor(private client: HttpClient) {

  }

  getCountry(): Observable<any> {
    return this.client.get<JobProps>(this.apiUrl)
  }

}
