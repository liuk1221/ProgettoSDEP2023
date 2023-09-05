import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ShopComponent } from './componenti/shop/shop.component';
import { FaqComponent } from './componenti/faq/faq.component';
import { CartComponent } from './componenti/cart/cart.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'about', component: AboutComponent},
  {path:'faq', component: FaqComponent},
  {path:'cart', component: CartComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
