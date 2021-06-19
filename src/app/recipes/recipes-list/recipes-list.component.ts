import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe("test2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe("test1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe("test2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe("test1",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe("test2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat vel libero sed pellentesque. Donec.",
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
