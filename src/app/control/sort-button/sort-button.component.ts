import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})
export class SortButtonComponent implements OnInit {
  @Input('title') title:string
  isActive = true
  constructor() { }

  ngOnInit(): void {
  }

}
