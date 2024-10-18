import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { HomeService } from '../../services/home.service';

interface JobProps {
  id: number,
  name: string,
  website?: string,
  linkedin?: string,
  github?: string,
  title: string,
  country: string,
  city: string,

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private service: HomeService) {
    this.service.getCountry().subscribe(
      (data: any) => {
        console.log(data)
      })
  }

}


