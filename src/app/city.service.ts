import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private favorites: number[] = [];
  private cities: any[] = [
    { id: 1, name: 'Москва', image: 'assets/images/moscow.png', description: 'Столица России, город федерального значения' },
    { id: 2, name: 'Санкт-Петербург', image: 'assets/images/spb.png', description: 'Второй по численности населения город России' },
    { id: 3, name: 'Новосибирск', image: 'assets/images/nvsb.png', description: 'Третий по численности населения город России' },
    { id: 4, name: 'Екатеринбург', image: 'assets/images/ekb.png', description: 'Город-миллионник в России. Тоже красивый город' },
    { id: 5, name: 'Нижний Новгород', image: 'assets/images/nvg.png', description: 'Город в центральной России. Красивый город' },
    { id: 6, name: 'Челябинск', image: 'assets/images/chelyabinsk.png', description: 'Город в Российской Федерации, седьмой по количеству жителей' },
    { id: 7, name: 'Казань', image: 'assets/images/kazan.png', description: 'Город в России, столица Республики Татарстан' }
  ];

  getCities(): any[] {
    return this.cities;
  }

  toggleFavorite(cityId: number): void {
    if (this.favorites.includes(cityId)) {
      this.favorites = this.favorites.filter(id => id !== cityId);
    } else {
      this.favorites.push(cityId);
    }
  }

  isFavorite(cityId: number): boolean {
    return this.favorites.includes(cityId);
  }

  addCity(cityData: any): void {
    const newCityId = this.cities.length + 1;
    this.cities.push({ ...cityData, id: newCityId });
  }

  deleteCity(cityId: number): void {
    this.cities = this.cities.filter(city => city.id !== cityId);
  }
}
