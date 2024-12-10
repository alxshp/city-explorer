import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
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
}
