import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private http = inject(HttpClient);
  private url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&price_change_percentage=1h,24h,7d&sparkline=true&per_page=100&page=1';
  private headers = new HttpHeaders({
    'x-cg-demo-api-key': 'CG-d3yCktYxZnEvwUPg6YcStmEr'
  });

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.url, { headers: this.headers });
  }
}
