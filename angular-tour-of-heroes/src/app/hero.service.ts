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

  getHero(id: number): Observable<Hero> {
    //А пока предположим, что герой с указанным `id` всегда существует.
    //Обработка ошибок будет добавлена ​​на следующем этапе руководства.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService:MessageService) { }
}
