import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-manage',
  templateUrl: './transfer-manage.component.html',
  styleUrls: ['./transfer-manage.component.css']
})
export class TransferManageComponent implements OnInit {
  @Output() onTransfer = new EventEmitter()
  
  ownerAccount = {
    username: 'Owner Account(4692)',
    amount: 50000
  }
  blockObj={
    icon: "assets/icons/arrows.png",
    title: "Make a Transfer",
    blockStyle: {
      height: "42px"
    }
  };
  fromAccountInput={
    title: "from account",
    value: `${this.ownerAccount.username} - $${this.ownerAccount.amount}`,
    type: "text",
    isDisable: true
  };
  toAccountValue="";
  amountValue="";
  transfer = {
    toAccount: '',
    amount: 0
  }
  constructor() { }

  onChangeToAccount(value) {
    this.transfer.toAccount = value
  }

  onChangeAmount(value) {
    this.transfer.amount = value
  }

  onSubmit() {
    if(!this.transfer) return
    this.ownerAccount.amount = this.ownerAccount.amount - this.transfer.amount
    this.fromAccountInput.value = `${this.ownerAccount.username} - $${this.ownerAccount.amount}`
    this.onTransfer.emit({toAccount: this.transfer.toAccount, amount: this.transfer.amount})
    this.clear()
  }

  clear() {
    this.toAccountValue = ""
    this.amountValue = ""
    this.transfer={
      toAccount: '',
      amount: 0
    }
  }

  ngOnInit(): void {
  }

}
