import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForumDataDB } from "./forum-data-db";
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

//Servizio Firebase per la comunicazione con il database
export class FirebaseService {

  // Variabile della classe: usa FireBaseService.path_to_DB
  // e NON firebase.path_to_DB o qualcosa del genere
  // Nota: questo url dev'essere SEMPRE completato con
  // '/<nome scheda presente nel db>'.json

  static path_to_DB = 'https://progettosdep2023-default-rtdb.europe-west1.firebasedatabase.app/';
  static id_list : number[] = [];

  constructor(private http: HttpClient) {} //In questo modo possiamo utilizzare il modulo http tramite la variabile.

  private autolocate(uri: string) {
    return `${FirebaseService.path_to_DB}${uri}.json`
  }

  // Inserimento di test
  
  // Inserimento
  insertMarble(body: ForumDataDB) {
    // return this.http.post(url, body);
    // FirebaseService.id_list.push(body['id'])
    return this.http.post(this.autolocate("marmi"), body)
  }
  
  // Get
  // per get specifici: url_DB/id_schema.json <---
  retrieveMarble(){
    // return this.http.get(url);
    // fa un retrieve dell'intero DB, per ngOnInit
    return this.http.get(this.autolocate("marmi"))
  }

  // Rimozione singola
  deleteMarble(id: number){
    return this.http.delete(`${this.autolocate("marmi")}/-${id}.json`)
  }

  // Rimozione totale
  deleteAllMarble(){}

  // Modifica
  updateMarble(id: number, body: ForumDataDB){
    // return this.http.patch(`${url}/-${id}.json`, body)
    return this.http.patch(`${this.autolocate("marmi")}/-${id}.json`, body)
  }

}
