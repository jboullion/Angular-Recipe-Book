import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 4),
    new Ingredient('Rebull', 12)
  ];

  constructor() {
    console.log(this.ingredients);
  }

  ngOnInit() {
  }

}
