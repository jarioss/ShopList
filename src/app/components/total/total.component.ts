import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  @Input() total:number | string = 0;
  @Input() mensaje:String = '';


  constructor() { }

  ngOnInit(): void {
  }

}
