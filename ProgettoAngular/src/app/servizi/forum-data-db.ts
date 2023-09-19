export interface ForumDataDB {
    id: string,
    nome: string,
    provenienza: string,
    descrizione: string,
    colore: string,
    venature: boolean,
    colore_v: string
    dim_x: number,
    dim_y: number,
    dim_z: number
    qta: number,
    prezzo: number
}

export interface OrdineDB {
    id_ordine: string,
    email: string,
    marmo: ForumDataDB
}

export interface FilterDB {
    nome? : string,
    prezzo_max? : number,
    prezzo_min? : number,
    prov? : string,
    colore? : string,
    venature? : boolean,
    colore_v? : string
}