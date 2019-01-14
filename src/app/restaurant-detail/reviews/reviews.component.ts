import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  reviews: any
  ngOnInit() {
    //Forma que a rota filha consegue recuperar o ID.
    this.restaurantsService.reviewsOfRestaurants(this.route.parent.snapshot.params['id'])
      .subscribe(reviews => this.reviews = reviews)
  }

}
