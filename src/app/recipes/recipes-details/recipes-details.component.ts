import { Component, OnInit } from '@angular/core';
import { RecipeDetails } from './recipe.details.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipeDetails: RecipeDetails = new RecipeDetails("test1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
    'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

  constructor() { }

  ngOnInit(): void {
  }

}
