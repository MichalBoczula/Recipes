import { Component, OnInit } from '@angular/core';
import { ShoppingList } from './shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingList[] = [
    new ShoppingList("test6", 1),
    new ShoppingList("test5", 2),
    new ShoppingList("test4", 3),
    new ShoppingList("test3", 4),
    new ShoppingList("test2", 5),
    new ShoppingList("test1", 6),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
