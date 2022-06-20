import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//RouterModule, Routes - импортируем чтобы приложение мого имеьт функцию маршрутизации

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, //Символ двоеточия ( :) pathуказывает на то, что :idэто заполнитель для конкретного героя id.
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
//exports: [ RouterModule ] -  экспортируем чтобы был доступен во всем приложении
//Метод вызывается, forRoot()потому что вы настраиваете маршрутизатор на корневом уровне приложения. Метод forRoot()предоставляет поставщиков услуг и директивы, необходимые для маршрутизации, и выполняет начальную навигацию на основе текущего URL-адреса браузера.

export class AppRoutingModule {}
