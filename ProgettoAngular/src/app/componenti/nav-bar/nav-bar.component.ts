import { Component } from '@angular/core';
import { FirebaseOptions } from '@angular/fire/app';
import { AuthService } from 'src/app/servizi/auth.service';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  
  constructor(public auth : AuthService, private firebase: FirebaseService){}

  onLogout(){
    this.auth.logout()
  }

  quick_pop(){
    this.firebase.dummyIMarble(
    ).subscribe(data => {
    })
  }
}
