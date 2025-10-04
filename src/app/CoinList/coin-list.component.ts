import { Component, inject, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { TableModule } from 'primeng/table';
import { Coin } from '../interfaces/coin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coin-list',
  imports: [TableModule, CommonModule],
  templateUrl: './coin-list.component.html',
  styleUrl: './coin-list.component.scss'
})
export class CoinListComponent implements OnInit {
  private coinService = inject(CoinService);
  coins: Coin[] = [];

  ngOnInit(): void {
      this.coinService.getCoins().subscribe(data => {
        this.coins = data;
        console.log(this.coins);
      });
  }
} 
