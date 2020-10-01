import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit, OnChanges {
  @Input('transaction') transactionItem;
  rowStyle = {}
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if(changes?.transactionItem){
      switch(changes?.transactionItem?.currentValue?.merchant?.name){
        case "The Tea Lounge":
        case "Whole Foods":
          this.rowStyle = {
            backgroundColor: 'rgb(25, 154, 118)'
          }
          break;
        case "Texaco":
          this.rowStyle = {
            backgroundColor: 'rgb(206, 23, 101)'
          }
          break;
        case "Amazon Online Store":
          this.rowStyle = {
            backgroundColor: 'rgb(184, 32, 34)'
          }
          break;
        case "7-Eleven":
          this.rowStyle = {
            backgroundColor: 'rgb(192, 139, 41)'
          }
          break;
        case "H&M Online Store":
          this.rowStyle = {
            backgroundColor: 'rgb(221, 81, 46)'
          }
          break;
        case "Southern Electric Company":
          this.rowStyle = {
            backgroundColor: 'rgb(250, 179, 51)'
          }
          break;
        default:
          this.rowStyle = {
            backgroundColor: 'rgb(25, 154, 118)'
          }
          break;

      }
    }
  }

  ngOnInit(): void {
    
  }

}
