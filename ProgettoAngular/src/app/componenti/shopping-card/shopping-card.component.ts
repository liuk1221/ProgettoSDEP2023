import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit{

  marmi = [
    {nome: "Travertino", img: "../../assets/HomePageImages/marmojpgs/Travertino.jpg", descrizione: "Il travertino è una roccia calcarea con un aspetto distintivo e venature che lo rendono molto apprezzato nell'architettura e nella decorazione degli interni ed esterni. La sua versatilità, bellezza naturale e varietà di colori lo rendono una scelta popolare per una serie di applicazioni."},
    {nome: "Marmo di Carrara", img: "../../assets/HomePageImages/marmojpgs/Marmo-di-carrara.jpg", descrizione: "Il marmo di Carrara è una delle varietà di marmo più prestigiose al mondo, ampiamente utilizzato in architettura e scultura grazie al suo colore bianco puro, alla sua texture uniforme e alla sua durabilità. È un materiale iconico che ha lasciato un'impronta significativa nella storia dell'arte e dell'architettura."},
    {nome: "Calacatta", img: "../../assets/HomePageImages/marmojpgs/Calacatta.jpg", descrizione: "Il marmo di Calacatta è una varietà di marmo pregiato rinomato per la sua venatura grigia su fondo bianco o crema, la sua eleganza e il suo prestigio. È una scelta popolare in progetti di design di alto livello e contribuisce a conferire un tocco di lusso e raffinatezza agli spazi."},
    {nome: "Lasa", img: "../../assets/HomePageImages/marmojpgs/Lasa.jpg", descrizione: "Il marmo di Lasa è una varietà di marmo bianco altamente pregiato con un aspetto luminoso e una qualità superiore. La sua purezza, resistenza e versatilità lo rendono una scelta popolare in progetti di design di alto livello e conferiscono agli spazi un tocco di eleganza e prestigio."}
  ]
  constructor(private firebase: FirebaseService){}
  
  ngOnInit(): void {
  }

  

}