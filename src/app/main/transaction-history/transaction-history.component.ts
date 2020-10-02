import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//interface
import { Sort } from '../../interface/sort'

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit, OnChanges {
  @Input('transactions') transactions;
  
  blockObj={
    icon: "assets/icons/briefcase.png",
    title: "Recent Transactions",
    blockStyle: {
      height: "62px"
    }
  };
  transactionList = []
  sortOptions: Sort[]=[
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

  sortType = 0
  sortSelected: Sort = this.sortOptions[0]
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.transactions.currentValue.length, this.transactions.length)
    if(changes.transactions.currentValue.length !== this.transactions.length){
      this.transactionList = changes.transactions.currentValue
      console.log(this.transactionList)
    }
  }

  onSearchChange(value) {
    if(value.length === 0){
      this.transactionList = this.transactions;
    }
    else{
      this.transactionList = this.transactions.filter(transaction => 
        transaction.merchant.name.toLowerCase().includes(value.toLowerCase())
      )
    }
    this.checkSort()
  }

  onClickSortButton(value: Sort) {
    if(value.key === this.sortSelected.key){
      if(this.sortType === 0)
        this.sortType = 1
      else
        this.sortType = 0
    }
    this.sortSelected = value
    this.checkSort()
  }

  checkSort() {
    switch (this.sortSelected.key) {
      case 'date':{
        this.sortDate()
      }
        break;
      case 'beneficiary':{
        this.sortBeneficiary()
      }
        break;
      case 'amount':{
        this.sortAmount()
      }
        break;
      default:
        break;
    }
  }

  sortDate() {
    this.transactionList.sort((a,b) => {
      let dateA = new Date(a.dates.valueDate).getTime()
      if(isNaN(dateA)){
        dateA = new Date(parseFloat(a.dates.valueDate)).getTime()
      }
      let dateB = new Date(b.dates.valueDate).getTime()
      if(isNaN(dateB)){
        dateB = new Date(parseFloat(b.dates.valueDate)).getTime()
      }
      if(this.sortType === 0)
        return dateB - dateA;
      else
        return dateA - dateB;
    });
  }

  sortBeneficiary(){
    this.transactionList.sort((a,b) => {
      if(this.sortType === 0)
        if(a.merchant.name < b.merchant.name)
          return -1;
        else
          return 1
      else
        if(a.merchant.name < b.merchant.name)
          return 1;
        else
          return -1
    });
  }

  sortAmount(){
    this.transactionList.sort((a,b) => {
      if(this.sortType === 0)
        return b.transaction.amountCurrency.amount - a.transaction.amountCurrency.amount;
      else
        return a.transaction.amountCurrency.amount - b.transaction.amountCurrency.amount;
    });
  }

  ngOnInit(): void {
    this.transactionList = this.transactions
    this.checkSort()
  }

}
