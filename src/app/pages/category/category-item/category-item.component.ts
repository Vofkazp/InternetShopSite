import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent implements OnInit {
  @Input() name!: string;

  ngOnInit() {
    console.log(this.name);
  }
}
