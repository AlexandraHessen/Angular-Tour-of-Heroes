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
  // hero:Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero[] = []

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // getHeroes(): void{
  //   this.heroes = this.heroService.getHeroes();
  // }

  //пока Observableне выпустит массив героев,
  //что может произойти сейчас или через несколько минут.
  //Метод subscribe()передает испускаемый массив обратному вызову,
  //который устанавливает heroesсвойство компонента.

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }


  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }


}
