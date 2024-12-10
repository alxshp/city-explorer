import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent {
  cityName: string = '';
  description: string = '';
  imageUrl: string = '';

  constructor(private router: Router, private cityService: CityService) {}

  onCreate(): void {
    const newCity = { name: this.cityName, description: this.description, image: this.imageUrl };
    this.cityService.addCity(newCity); // Добавление нового города в сервис
    this.clearFields();
    this.router.navigate(['/list']); // Переход к списку городов
  }

  onCancel(): void {
    this.clearFields();
    this.router.navigate(['/list']);
  }

  clearFields(): void {
    this.cityName = '';
    this.description = '';
    this.imageUrl = '';
  }
}

