import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from '../app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";


@Injectable()
export class RestaurantsService {
    restaurants: Restaurant[];


    constructor(private _http: Http) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this._http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
    getRestaurantById(id: string): Observable<Restaurant> {
        return this._http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurants(id: string): Observable<any> {
        return this._http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getMenuItem(id: string): Observable<MenuItem[]> {
        return this._http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}