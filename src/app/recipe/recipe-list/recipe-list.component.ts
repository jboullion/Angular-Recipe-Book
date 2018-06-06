import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [

    new Recipe('Tuna Noodle Casserole',
              'Tuna, Noodles, Good',
              'http://cdn-image.myrecipes.com/sites/default/files/image/recipes/ck/10/01/tuna-noodle-casserole-ck-x.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
