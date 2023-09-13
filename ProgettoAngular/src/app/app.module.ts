import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ShopGridListComponent } from './componenti/shop/shop-grid-list/shop-grid-list.component';
import { ShoppingCardComponent } from './componenti/shopping-card/shopping-card.component';


//Imports di angular material
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { AngularSvgIconModule } from "angular-svg-icon";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

//Imports di angular fire
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';

//FormsModule
import { FormsModule } from '@angular/forms';
import { ShopNowComponent } from './componenti/shop-now/shop-now.component';




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
        LoginComponent,
        RegisterComponent,
        ShopNowComponent
    ],
    providers: [
      {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    ],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatCardModule,
        MatGridListModule,
        AngularSvgIconModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        MatFormFieldModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
