import { Injectable } from '@angular/core';
import { Hero } from './hero' // импортируем наш созданный интерфейс
import { HEROES } from './mock-heroes' // импортируем наш массив объектов
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]>{
  //   const heroes = of (HEROES);
  //   //of(HEROES)возвращает объект Observable<Hero[]>,
  //   //который выдает единственное значение — массив фиктивных героев.
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    //А пока предположим, что герой с указанным `id` всегда существует.
    //Обработка ошибок будет добавлена ​​на следующем этапе руководства.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}


}
