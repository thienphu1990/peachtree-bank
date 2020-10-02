import { Component, OnInit } from '@angular/core';

//mock
import { TransactionList } from '../mock/mock-transaction';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  transactionList = TransactionList
  constructor() { }

  makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  onTransfer(value) {
    this.transactionList.unshift({
      categoryCode: `#${this.makeid(6)}`,
      dates: {
          valueDate: new Date().getTime().toString()
      },
      transaction: {
          amountCurrency: {
              amount: value.amount,
              currencyCode: "EUR"
          },
          type: "Transaction",
      },
      merchant: {
          name: value.toAccount,
          accountNumber: "SI64397745065188826",
          avatar: ""
      }
    })
    console.log(value)
  }

  ngOnInit(): void {
  }

}
