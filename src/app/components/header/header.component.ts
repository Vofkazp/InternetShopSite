import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from '@angular/router';
import {DropdownComponent} from "../dropdown/dropdown.component";
import {CategoryListComponent} from "../category-list/category-list.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    DropdownComponent,
    CategoryListComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  search = new FormControl('');
  isOpen: boolean = false;
  isAuthorized: boolean = false;
  user = {name: 'Сергей', avatar: '/assets/images/avatar.png'};
  categoryList: { name: string, rout: string }[] = [
    {name: 'Молоко, сыр, яйцо', rout: 'milk'},
    {name: 'Хлеб', rout: 'broad'},
    {name: 'Фрукты и овощи', rout: 'fruits'},
    {name: 'Замороженные продукты', rout: 'frozen'},
    {name: 'Напитки', rout: 'beverages'},
    {name: 'Кондитерские изделия', rout: 'confectionery'},
    {name: 'Чай, кофе', rout: 'tea'},
    {name: 'Бакалея', rout: 'grocery'},
    {name: 'Здоровое питание', rout: 'healthy'},
    {name: 'Зоотовары', rout: 'pet'},
    {name: 'Непродовольственные товары', rout: 'nonfood'},
    {name: 'Детское питание', rout: 'baby'},
    {name: 'Мясо, птица, колбаса', rout: 'meat'},
  ];

  constructor(private router: Router) {}


  ngOnInit(): void {
      this.search.valueChanges.subscribe(value => {
        this.router.navigate(['/search', { value: value }]);
      })
  }

  toPage(rout: string) {
    this.router.navigate([rout]);
  }

  categoryToggle() {
    this.isOpen = !this.isOpen;
  }

  close(close: boolean) {
    this.isOpen = !close;
  }

  protected readonly event = event;
}
