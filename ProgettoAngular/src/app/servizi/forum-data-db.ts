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
    email: string,
    id_marmo: string,
    marmo: ForumDataDB
}