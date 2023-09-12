// private nome_array = [
//     "Travertino",
//     "Marmo di Carrara",
//     "Calacatta",
//     "Lasa",
//     "Rosso di Verona",
//     "Rosso di Levanto",
//     "Breccia Medicea",
//     "Marmo di Siena"
//   ];
//   private prov_array = [
//     "Roma",
//     "Carrara",
//     "Arezzo",
//     "Verona",
//     "Perugia",
//     "Padova",
//     "Genova"
//   ]
//   private color_array = [
//     "#000000",
//     "#181818",
//     "#FFFFFF",
//     "#cdc3d1",
//     "#c3ced1",
//     "#c7d1c3",
//     "#d1c6c3"
//   ]
//   private rand(range: number){
//     return Math.floor(Math.random() * range)
//   }
//   dummyIMarble() {
//     // inserimento di una cinq.ina di elementi con valori a caso
//     // meglio limitarne il suo uso
//     // da cancellare a fine progetto
//     let db_data_dummy : ForumDataDB = {
//       nome: '',
//       provenienza: '',
//       colore: '',
//       venature: false,
//       colore_v: '',
//       dim_x: 0,
//       dim_y: 0,
//       dim_z: 0,
//       qta: 0,
//       prezzo: 0
//     };
//     db_data_dummy['nome'] = this.nome_array[this.rand(this.nome_array.length)]
//     db_data_dummy['provenienza'] = this.prov_array[this.rand(this.prov_array.length)]
//     db_data_dummy['colore'] = this.color_array[this.rand(this.color_array.length)]
//     db_data_dummy['venature'] = this.rand(2) == 0 ? true : false
//     db_data_dummy['colore_v'] = this.color_array[this.rand(this.color_array.length)]
//     db_data_dummy['dim_x'] = this.rand(25) + Number(Math.random().toPrecision(2))
//     db_data_dummy['dim_y'] = this.rand(25) + Number(Math.random().toPrecision(2))
//     db_data_dummy['dim_z'] = this.rand(25) + Number(Math.random().toPrecision(2))
//     db_data_dummy['qta'] = this.rand(1000)
//     db_data_dummy['prezzo'] = this.rand(50)
//     // console.log(FirebaseService.id_list)
//     return this.http.post(
//       this.autolocate("marmi"),
//       db_data_dummy)
//   }
