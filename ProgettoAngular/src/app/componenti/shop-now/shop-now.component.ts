import { Component, OnInit, Inject, Input} from '@angular/core';
import { ForumDataDB, OrdineDB } from "../../servizi/forum-data-db";
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from "@angular/router";
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ShopComponent } from "../shop/shop.component";
import { 
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA, 
  MatDialogContainer} from "@angular/material/dialog";
import { AuthService } from 'src/app/servizi/auth.service';

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.scss'],
})
export class ShopNowComponent implements OnInit {
  @Input() preordine_id: string;
  // @Input() preordine_marmo: ForumDataDB;
  // @Input() preordine_present: boolean;
  
  public one_slab : ForumDataDB;
  public ordine : OrdineDB;
  public show_preview : boolean;
  public id_present : boolean;
  public ordine_present : boolean;
  public preordine : OrdineDB = {
    id_ordine: '',
    email: this.login.userEmail,
    marmo: {
      id: '',
      nome: '',
      provenienza: '',
      descrizione: '',
      colore: '',
      venature: false,
      colore_v: '',
      dim_x: 0,
      dim_y: 0,
      dim_z: 0,
      qta: 0,
      prezzo: 0
    }
  };
  public preordine_present : boolean;
  public id_ordine : string;

  constructor (
    public magazzino: FirebaseService,
    public negozio: ShopComponent,
    public login: AuthService) { }

  ngOnInit() {
    this.one_slab = {
      id: '',
      nome: '',
      provenienza: '',
      descrizione: '',
      colore: '',
      venature: false,
      colore_v: '',
      dim_x: 0,
      dim_y: 0,
      dim_z: 0,
      qta: 0,
      prezzo: 0
    };
    this.ordine = {
      id_ordine: '',
      email: this.login.userEmail,
      marmo: this.one_slab
    }
    if (this.loadPreorderCond()){
      this.one_slab = this.loadPreorder()
      this.id_present = true
      console.log(this.ordine)
      this.preview()
    }
    else {
      this.id_present = false;
      this.ordine_present = false;
    }
    this.show_preview = false;
    this.id_ordine = '';
  }

  private submit_id(id: string) : void{
    // on enter: submit ID
    if (id.length < 19){
      alert("Incorrect ID length")
      return
    }
    this.one_slab;
    for (let index = 0; index < this.negozio.prodotti.length; index++) {
      const element = this.negozio.prodotti[index];
      if (element.id == id) {
        this.one_slab = element;
      }
      this.one_slab.id = id;
      this.id_present = true;
    }
    // console.log(this.one_slab)
  }

  public submit(id: string){
    if (this.ordine.marmo.qta != 0) {
      this.preview()
      return 
    }
    this.submit_id(id)
  }

  public send_amount(amount: string) {
    let value = eval(amount.trim())
    if (value <= 0 || value > this.one_slab.qta || value === undefined) {
      alert("Wrong value")
      return
    }
    this.ordine.marmo.qta = value
    // console.log("Quantita: "+this.ordine.marmo.qta)
    if (this.id_present) {
      this.preview()
      return
    }
  }

  private openPreview() {
    this.show_preview = true;    
  }
  
  public preview(){
    // impacchetta ordine

    this.ordine.marmo.id = this.one_slab.id;
    this.ordine.marmo.nome = this.one_slab.nome;
    this.ordine.marmo.provenienza = this.one_slab.provenienza;
    this.ordine.marmo.descrizione = this.one_slab.descrizione;
    this.ordine.marmo.colore = this.one_slab.colore;
    this.ordine.marmo.venature = this.one_slab.venature;
    this.ordine.marmo.colore_v = this.one_slab.colore_v;
    this.ordine.marmo.dim_x = this.one_slab.dim_x;
    this.ordine.marmo.dim_y = this.one_slab.dim_y;
    this.ordine.marmo.dim_z = this.one_slab.dim_z;
    this.ordine.marmo.prezzo = this.one_slab.prezzo;
    this.ordine.email = this.login.userEmail;
    this.ordine_present = true;
    // get quantita richiesta (turn on flag)
    this.openPreview()
  }

  public purchaseMarble(){
    if (this.ordine_present) {
      this.magazzino.insertOrdine(
        this.ordine).subscribe((data : any) => {})
    }
    alert("Ordine avvenuto con successo!")
    this.ngOnInit()
  }

  saveNoPreorder() {
    localStorage.setItem("preordine_cond", String(''))
  }

  savePreorder(body: ForumDataDB) {
    localStorage.setItem("preordine", String(JSON.stringify(body)))
    localStorage.setItem("preordine_cond", String(true))
  }

  loadPreorderCond() {
    console.log(localStorage.getItem("preordine_cond"))
    return Boolean(localStorage.getItem("preordine_cond"))
  }

  loadPreorder() {
    // return localStorage.getItem("preordine")
    return JSON.parse(localStorage.getItem("preordine"))
  }

  deleteOrder(){
    this.ngOnInit()
  }

  public list_all_marble() {
    return this.negozio.prodotti
  }
  
  public isStrDefined(msg: string) {
    if (msg === '')
      return false
    return true
  }

  public flagStatus() {
    return this.show_preview;
  }

  public veinsStatus() {
    return this.one_slab.venature;
  }

  public isId() {
    return this.id_present;
  }

  public isQta() {
    return this.ordine.marmo.qta != 0;
  }

  get_src_uri(name: string){
    return '../../assets/HomePageImages/marmojpgs/'+name.replaceAll(' ','-')+'.jpg'
  }
}
