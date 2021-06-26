import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.css']
})
export class RecipesListItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor() { }

  ngOnInit(): void {
  }

}
