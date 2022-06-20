import { Injectable } from '@angular/core';
import { Hero } from './hero' // импортируем наш созданный интерфейс
import { HEROES } from './mock-heroes' // импортируем наш массив объектов
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]>{
    const heroes = of (HEROES);
    //of(HEROES)возвращает объект Observable<Hero[]>,
    //который выдает единственное значение — массив фиктивных героев.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService:MessageService) { }
}
