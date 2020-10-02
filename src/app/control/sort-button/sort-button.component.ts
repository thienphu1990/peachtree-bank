import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Sort } from '../../interface/sort'

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})
export class SortButtonComponent implements OnInit {
  @Input() sort:Sort
  @Input('sortType') sortType: number
  @Input('sortSelected') sortSelected: Sort
  @Output() onClickSortButton = new EventEmitter()

  isActive = false

  constructor() { }

  onClick() {
    this.onClickSortButton.emit(this.sort)
  }

  ngOnInit(): void {
  }

}
