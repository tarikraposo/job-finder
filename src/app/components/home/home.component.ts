import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, CommonModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isLoading = true;
  results: any
  url: any


  constructor(private service: HomeService) {

    this.service.getCountry().subscribe(
      response => {
        this.results = response;
        // this.results = Array.of(this.results)
      },
      error => {
        this.isLoading = true; // Em caso de erro, para o carregamento
        console.error('Erro ao carregar lista de pessoas', error);
      })
    this.isLoading = false;


  }



}


