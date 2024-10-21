import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { HomeService } from '../../services/home.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent<JobProps> {
  isLoading = true;
  data: any = ''

  @Input() title = '';
  @Input() location = '';
  @Input() description = '';
  @Input() company = '';
  @Input() website_url = '';

  constructor(private service: HomeService) {
    this.service.getCountry().subscribe(
      (Data: any) => {

        this.data = Data;
      })
    this.isLoading = false;
  }

}


