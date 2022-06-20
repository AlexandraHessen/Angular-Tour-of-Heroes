import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero' // импортируем наш созданный интерфейс
// import { HEROES } from '../mock-heroes' // импортируем наш массив объектов
import { HeroService } from '../hero.service'; // импортируем сервис с нашим массивом объектов
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //переменные в самом начале, раньше конструктора
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  //пока Observableне выпустит массив героев,
  //что может произойти сейчас или через несколько минут.
  //Метод subscribe()передает испускаемый массив обратному вызову,
  //который устанавливает heroesсвойство компонента.

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
