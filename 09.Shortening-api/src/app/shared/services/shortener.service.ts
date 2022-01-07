import { Shorteens } from './../interfaces/shorteens';
import { catchError, map, mapTo, of, retry, tap, firstValueFrom, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ShortenerService {

  private readonly URL_SHORTENER: string = environment.URL_SHORTENER;
  public observer:BehaviorSubject<Array<Shorteens>> = new BehaviorSubject(new Array);
  public lastCopy:number = -1;

  constructor(private http: HttpClient) { }

  shorteen = async (url: string) => {
    return await firstValueFrom(
      this.http
        .get(`${this.URL_SHORTENER}${url}`)
        .pipe(
          map((data: any) => {
            return {
              status: 'ok',
              original: data.result.original_link,
              shortened: data.result.full_short_link,
            };
          }),
          retry(1),
          catchError(() => of({ status: 'err' }))
        )
    )
  }
}
