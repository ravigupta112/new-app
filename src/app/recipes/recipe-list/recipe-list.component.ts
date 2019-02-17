import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Reciepe name", "this is test description", "https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/basic-architecture-of-angular-2-applications/Images/image001.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
