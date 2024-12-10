import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cities: any[] = [];

  constructor(public cityService: CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cities = this.cityService.getCities();
  }

  toggleFavorite(cityId: number): void {
    this.cityService.toggleFavorite(cityId);
  }

  isFavorite(cityId: number): boolean {
    return this.cityService.isFavorite(cityId);
  }
  deleteCity(cityId: number): void {
    this.cityService.deleteCity(cityId);
    this.getCities();
  }

}
