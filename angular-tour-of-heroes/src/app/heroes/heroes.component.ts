import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero' // импортируем наш созданный интерфейс
import { HEROES } from '../mock-heroes' // импортируем наш массив объектов

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //переменные в самом начале, раньше конструктора
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  selectHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectHero = hero;
    console.log(hero);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
