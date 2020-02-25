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
  transaction = [];
  constructor() { }


  ngOnInit() {
    this.transaction = [];
  }

  add() {
    if (this.fromAcc !== this.toAcc && this.amount > 0 && this.amount < 10000) {
      console.log(`adding balances`);
      this.transaction.push({ From: this.fromAcc, TO: this.toAcc, Amount: this.amount });
    } else {
      // show error
      console.log(`To account and from account cannot be same or amount is invalid`);
    }
  }
  calculate() {
    console.log(`calculating balances`);

    this.transaction.forEach((transfer: any) => {
      if (transfer.From === 'Scott') {
        this.ScottCurrentbal = this.ScottCurrentbal - transfer.Amount;
      }
    });
  }
  balancetransaction(input: number, username: string) {
    if (username === 'harsha') {
      this.HarshaCurrentbal = input;
    } else {
      this.ScottCurrentbal = input;

    }

  }
}
