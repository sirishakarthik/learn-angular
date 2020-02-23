import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-transfer',
  templateUrl: './balance-transfer.component.html',
  styleUrls: ['./balance-transfer.component.scss']
})
export class BalanceTransferComponent implements OnInit {
  harshaInitBal: number;
  ScottInitBal: number;
  toAcc: string;
  fromAcc: string;
  amount: number;
  HarshaCurrentbal: number;
  ScottCurrentbal: number;
  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.fromAcc !== this.toAcc && this.amount > 0 && this.amount < 10000) {
      console.log(`adding balances`);
    } else {
      // show error
      console.log(`To account and from account cannot be same or amount is invalid`);
    }
  }

  calculate() {
    console.log(`calculating balances`);
  }

}
