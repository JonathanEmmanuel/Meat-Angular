import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private _restaurantsService: RestaurantsService) { }

  restaurants: Restaurant[];

  ngOnInit() {
    this._restaurantsService.getRestaurants()
      .subscribe(restaurants => {this.restaurants = restaurants})
  }

}
