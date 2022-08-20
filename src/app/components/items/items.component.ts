import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = [];
    this.items = this.itemService.getItem();

    this.getTotal();
  }
  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id);/* la función filter va a regresar todos los elementos que su id sean diferentes a los id de item */
    this.getTotal();
  }
  toggleItem(item: Item){
    this.getTotal();
  }
  getTotal() { /* Estudiar más las funciones anidadas */
    this.total = this.items
                .filter( item => !item.completed)
                .map(item => item.quantity * item.price)
                .reduce( (acc,item) => acc += item, 0);
  }
}
