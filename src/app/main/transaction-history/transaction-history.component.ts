import { Component, OnInit } from '@angular/core';

//mock
import { TransactionList } from '../../mock/mock-transaction';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  blockObj={
    icon: "assets/icons/briefcase.png",
    title: "Recent Transactions",
    blockStyle: {
      height: "62px"
    }
  };
  searchTransactionInput={
    placeHolder: "Search by typing...",
    type: "text",
  };

  transactionList = TransactionList;
  constructor() { }

  ngOnInit(): void {
  }

}
