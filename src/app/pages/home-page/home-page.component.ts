import {Component} from '@angular/core';
import {RatingComponent} from "../../components/rating/rating.component";
import products from "../../../data/product.json";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {BanersComponent} from "../../components/baners/baners.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RatingComponent,
    NgForOf,
    NgClass,
    NgIf,
    BanersComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  voted: number[] = [12, 14]
  cart: { id: number, count: number }[] = [
    {id: 12, count: 1},
    {id: 95, count: 3},
  ];

  protected readonly products = products;

  saveRating(id: number, value: number) {
    console.log(`id:` + id + ', value:' + value);
  }

  isVoted(id: number) {
    const vote = this.voted.find(e => e === id);
    return vote !== undefined;
  }

  decrement(id: number) {
    const index = this.cart.findIndex(e => e.id === id);
    if (index !== -1) {
      if (this.cart[index].count > 1) {
        this.cart[index].count--;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  increment(id: number) {
    const index = this.cart.findIndex(e => e.id === id);
    if (index !== -1) {
      this.cart[index].count++;
    } else {
      this.cart.push({id, count: 1});
    }
  }

  ifCardIndex(id: number) {
    return this.cart.findIndex(e => e.id === id);
  }

  addToCart(id: number) {
    this.cart.push({id, count: 1});
  }
}
