import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTileView: boolean = true;
  showCityList: boolean = true;
  showButtons: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/create-city') {
          this.showCityList = false;
          this.showButtons = false;
        } else {
          this.showCityList = true;
          this.showButtons = true;
        }
      }
    });
  }

  switchToListView() {
    this.isTileView = false;
  }

  switchToTileView() {
    this.isTileView = true;
  }
}
