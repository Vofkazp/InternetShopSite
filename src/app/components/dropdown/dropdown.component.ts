import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() user!: {avatar: string, name: string};
  isOpen = false;

  constructor(private eRef: ElementRef, private router: Router) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toRout(rout: string) {
    this.isOpen = false;
    this.router.navigate([rout]);
  }

  logOut() {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
