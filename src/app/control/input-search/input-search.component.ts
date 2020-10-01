import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() onSearchChange = new EventEmitter()
  searchName: string = ""

  constructor() { }

  onInputChange(searchName: string) {
    this.searchName = searchName
    this.onSearchChange.emit(this.searchName)
  }

  clearSearch() {
    this.searchName = ''
    this.onSearchChange.emit(this.searchName)
  }

  ngOnInit(): void {
  }

}
