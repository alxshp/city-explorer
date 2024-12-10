import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { ListComponent } from './list/list.component';
import { CreateCityComponent } from './create-city/create-city.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    ListComponent,
    CreateCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
