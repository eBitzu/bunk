import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FteamService {

  constructor(private http: HttpClient) { }
  getPlayers() {
    console.log('here');
    return this.http.get('assets/mocks/players.json')
    .pipe(
      catchError((err) => of(err))
    );
  }
}
