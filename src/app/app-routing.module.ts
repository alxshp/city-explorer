import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { ListComponent } from './list/list.component';
import { CreateCityComponent } from './create-city/create-city.component';



const routes: Routes = [
  { path: 'tiles', component: TileComponent },
  { path: 'list', component: ListComponent },
  { path: 'create-city', component: CreateCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
