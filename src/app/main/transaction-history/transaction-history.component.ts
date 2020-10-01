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
  sortOptions=[
    {
      title: "date",
      key: "date"
    },
    {
      title: "beneficiary",
      key: "beneficiary"
    },
    {
      title: "amount",
      key: "amount"
    }
  ]

  transactionList = TransactionList;
  constructor() { }

  onSearchChange(value) {
    if(value.length === 0){
      this.transactionList = TransactionList;
    }
    else{
      this.transactionList = TransactionList.filter(transaction => 
        transaction.merchant.name.toLowerCase().includes(value.toLowerCase())
      )
    }
  }

  ngOnInit(): void {
  }

}
