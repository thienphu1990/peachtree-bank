import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-manage',
  templateUrl: './transfer-manage.component.html',
  styleUrls: ['./transfer-manage.component.css']
})
export class TransferManageComponent implements OnInit {
  blockObj={
    icon: "assets/icons/arrows.png",
    title: "Make a Transfer",
    blockStyle: {
      height: "42px"
    }
  };
  fromAccountInput={
    title: "from account",
    value: "Free Checking(4692) - $5824.76",
    type: "text",
    isDisable: true
  };
  toAccountInput={
    title: "to account",
    value: "",
    type: "text",
    placeHolder: "Type to account",
    isDisable: false
  };
  amountInput={
    title: "amount",
    value: "",
    type: "text",
    placeHolder: "$ 0.00",
    isDisable: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
