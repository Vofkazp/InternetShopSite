import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit {
  @Input() rating!: number;
  @Input() isBanHover!: boolean;
  @Output() ratingChange = new EventEmitter();
  ratingList: number[] = [1, 2, 3, 4, 5];
  whole!:number;

  ngOnInit(): void {
    this.whole = Math.round((this.ratingList.length + 1) - this.rating);
  }

  saveRating(value: number): void {
    if(!this.isBanHover) {
      const rating = (this.ratingList.length + 1) - value;
      this.ratingChange.emit(rating);
    }
  }
}
