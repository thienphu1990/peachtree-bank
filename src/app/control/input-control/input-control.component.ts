import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit, OnChanges {
  @Input('title') inputTitle:string;
  @Input('value') inputValue:string;
  @Input('placeHolder') inputPlaceHolder:string;
  @Input('type') inputType:string;
  @Input('key') inputKey:string;
  @Input('isDisable') inputIsDisable:boolean;
  
  @Output() onInputChange = new EventEmitter()
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
  
  onChange(value: string) {
    this.inputValue = value
    this.onInputChange.emit(this.inputValue)
  }

  ngOnInit(): void {
  }

}
