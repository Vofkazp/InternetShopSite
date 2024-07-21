import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CategoryComponent} from "./pages/category/category/category.component";
import {CategoryItemComponent} from "./pages/category/category-item/category-item.component";
import {SearchComponent} from "./pages/search/search.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CartComponent} from "./pages/cart/cart.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:name', component: CategoryItemComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cart', component: CartComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'favorites', component: FavoritesComponent},
  // {
  //   path: 'authentication',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./authentication/authentication.pages').then(
  //       (m) => m.AuthenticationModule
  //     ),
  // },
  { path: '**', redirectTo: '' },
];
