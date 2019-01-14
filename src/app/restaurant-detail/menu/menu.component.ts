import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service'
import { MenuItem } from '../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }
  menu: MenuItem[] = [];

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.restaurantsService.getMenuItem(this.route.parent.snapshot.params['id']).
      subscribe(menu => this.menu = menu)
  }
  addMenuItem(item) {
    console.log(item)
  }

}
