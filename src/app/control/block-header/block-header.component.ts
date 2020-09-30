import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.css']
})
export class BlockHeaderComponent implements OnInit {
  @Input('icon') blockIcon:string;
  @Input('title') blockTitle:string;
  @Input('blockStyle') blockStyle;
  constructor() { }

  ngOnInit(): void {
  }

}
