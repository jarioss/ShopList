import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  /* Se definen los eventos personalizados de entrada o salida */
  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(item: Item){
    this.deleteItem.emit(item);
  }
  onToggle(item: Item){
    item.completed = !item.completed;/*con esto se esta diciendo que se cambie el dato */
    this.toggleItem.emit(item)
  }

}
