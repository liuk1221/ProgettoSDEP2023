import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './componenti/nav-bar/nav-bar.component';

//Imports di angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './componenti/home/home.component';
import { ShopComponent } from './componenti/shop/shop.component';
import { AboutComponent } from './componenti/about/about.component';
import { FaqComponent } from './componenti/faq/faq.component';
import { CartComponent } from './componenti/cart/cart.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';
import { ShoppingCardComponent } from './componenti/shopping-card/shopping-card.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    FaqComponent,
    CartComponent,
    NotFoundComponent,
    ShoppingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
