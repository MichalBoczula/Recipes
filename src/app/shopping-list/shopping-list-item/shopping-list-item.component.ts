import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from './shopping-list-item.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
