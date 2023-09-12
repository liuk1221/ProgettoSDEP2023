import { Component, OnInit } from '@angular/core';
import { ForumDataDB } from "../../servizi/forum-data-db";
import { FirebaseService } from 'src/app/servizi/firebase.service';


@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit{

  public rows : number = 4;
  public prodotti : ForumDataDB[];
  public marbleform: ForumDataDB = {
    nome: '',
    provenienza: '',
    colore: '',
    venature: false,
    colore_v: '',
    dim_x: 0,
    dim_y: 0,
    dim_z: 0,
    qta: 0,
    prezzo: 0,
    descrizione: ''
  };
  public pick : number[] = [0,0,0,0];
  private ids : any[] = [];
  private id_to_act : number = 0;

  constructor(private firebase: FirebaseService) { }
  
  ngOnInit(): void {
    this.four_random_cards()
  }


  private rand(range: number){
    return Math.floor(Math.random() * range)
  }

  four_random_cards() {
    this.firebase.retrieveMarble(
      ).subscribe((data: any) => {
        console.log(data)
        this.prodotti = Object.keys(data).map(key => { 
        this.ids.push(key)
        data[key]['id'] = key
        return data[key] 
      })
    });
    let i = 0;
    if (this.prodotti.length > 4) {      
      while (i < 4 && this.pick[3] == 0) {
        this.pick[i] = this.rand(this.prodotti.length)
        for (let index = i; index > 0; index--) {
          if (this.pick[i] == this.pick[index]) {
            this.pick[i] = this.rand(this.prodotti.length)
          } else {
            break;
          }
        }
        i++;
      }
    } else {
      this.pick[0] = this.rand(this.prodotti.length);
      this.pick[1] = this.rand(this.prodotti.length);
      this.pick[2] = this.rand(this.prodotti.length);
      this.pick[3] = this.rand(this.prodotti.length);
    }
  }

}