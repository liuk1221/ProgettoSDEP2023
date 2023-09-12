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
// private desc_array = [
//     "il travertino è una roccia calcarea con un aspetto distintivo e venature che lo rendono molto apprezzato nell'architettura e nella decorazione degli interni ed esterni. La sua versatilità, bellezza naturale e varietà di colori lo rendono una scelta popolare per una serie di applicazioni.",
//     "il marmo di Carrara è una delle varietà di marmo più prestigiose al mondo, ampiamente utilizzato in architettura e scultura grazie al suo colore bianco puro, alla sua texture uniforme e alla sua durabilità. È un materiale iconico che ha lasciato un'impronta significativa nella storia dell'arte e dell'architettura.",
//     'il marmo di Calacatta è una varietà di marmo pregiato rinomato per la sua venatura grigia su fondo bianco o crema, la sua eleganza e il suo prestigio. È una scelta popolare in progetti di design di alto livello e contribuisce a conferire un tocco di lusso e raffinatezza agli spazi.',
//     'il marmo di Lasa è una varietà di marmo bianco altamente pregiato con un aspetto luminoso e una qualità superiore. La sua purezza, resistenza e versatilità lo rendono una scelta popolare in progetti di design di alto livello e conferiscono agli spazi un tocco di eleganza e prestigio.',
//     'l marmo Rosso di Verona è una varietà di marmo pregiato noto per il suo colore rosso intenso e la sua eleganza. È ampiamente utilizzato in applicazioni di design e architettura che richiedono un tocco di calore e raffinatezza. La sua bellezza e la sua storia lo rendono una scelta iconica per progetti di alto livello.',
//     "il marmo Rosso di Levanto è una varietà di marmo pregiato con un colore rosso caldo e venature contrastanti. È ampiamente utilizzato in applicazioni di design d'interni ed esterni e conferisce agli spazi un aspetto accogliente e affascinante. La sua bellezza e la sua versatilità lo rendono una scelta popolare tra gli architetti e i designer.",
//     'la Breccia Medicea è una varietà di marmo pregiato con una composizione unica che combina frammenti di rocce e pietre in una matrice di marmo. La sua estetica unica, la sua versatilità e la sua storia storica lo rendono una scelta apprezzata in progetti di design e architettura che cercano un tocco di eleganza e originalità.',
//     "il marmo di Siena è una varietà di marmo pregiato con colori caldi e venature distintive. La sua bellezza, resistenza e versatilità lo rendono una scelta apprezzata in progetti di design e architettura che cercano di conferire eleganza e carattere agli spazi. La sua storia culturale e artistica lo rende un materiale iconico nell'arte e nell'architettura."
// ]
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

//     let name_desc = this.rand(this.nome_array.length)
//     db_data_dummy['nome'] = this.nome_array[name_desc]
//     db_data_dummy['provenienza'] = this.prov_array[name_desc]
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
