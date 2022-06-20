import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero' // импортируем наш созданный интерфейс

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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
