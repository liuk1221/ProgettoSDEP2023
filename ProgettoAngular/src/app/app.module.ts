import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

//Moduli NG
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Imports dei COMPONENTI
import { NavBarComponent } from './componenti/nav-bar/nav-bar.component';
import { FooterComponent } from './componenti/footer/footer.component';
import { HomeComponent } from './componenti/home/home.component';
import { ShopComponent } from './componenti/shop/shop.component';
import { AboutComponent } from './componenti/about/about.component';
import { FaqComponent } from './componenti/faq/faq.component';
import { CartComponent } from './componenti/cart/cart.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';
import { ShoppingCardComponent } from './componenti/shopping-card/shopping-card.component';

//Imports di angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { ShopGridListComponent } from './componenti/shop/shop-grid-list/shop-grid-list.component';
import { ShopProductCardComponent } from './componenti/shop/shop-product-card/shop-product-card.component';



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
    ShoppingCardComponent,
    FooterComponent,
    ShopGridListComponent,
    ShopProductCardComponent,
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
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
