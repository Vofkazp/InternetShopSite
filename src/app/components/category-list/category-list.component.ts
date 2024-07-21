import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  @Input() categoryList!: {name: string, rout: string}[];
  @Output() close = new EventEmitter<boolean>();

  constructor(private router: Router, private eRef: ElementRef) {}

  selectedItem(value: string) {
    this.router.navigate([`category/${value}`]);
    this.close.emit(true);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.close.emit(true);
    }
  }
}
