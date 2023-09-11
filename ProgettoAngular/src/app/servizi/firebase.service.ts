import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Servizio Firebase per la comunicazione con il database
export class FirebaseService {

  constructor(private http: HttpClient) {} //In questo modo possiamo utilizzare il modulo http tramite la variabile.

}
