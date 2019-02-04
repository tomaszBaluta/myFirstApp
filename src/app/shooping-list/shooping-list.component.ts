import { Component, OnInit } from '@angular/core';
import {Ingredent} from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredent[] = [
    new Ingredent('Apples', 5),
    new Ingredent('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredent) {
    this.ingredients.push(ingredient);
  }

}
