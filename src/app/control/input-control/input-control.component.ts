import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {
  @Input('title') inputTitle:string;
  @Input('value') inputValue:string;
  @Input('placeHolder') inputPlaceHolder:string;
  @Input('type') inputType:string;
  @Input('isDisable') inputIsDisable:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
