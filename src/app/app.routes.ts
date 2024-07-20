import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CategoryComponent} from "./pages/category/category/category.component";
import {CategoryItemComponent} from "./pages/category/category-item/category-item.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:name', component: CategoryItemComponent},
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
