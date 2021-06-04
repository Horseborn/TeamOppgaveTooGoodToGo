const model = {
  navbar:[
    {
        href:'Hjem',
        knappNavn: 'Hjem' 
    },
    {
        href:'bedrift',
        knappNavn: 'For bedrifter' 
    },

],

  inputs: {
    Main: {
      informasjon: "",
    },
    Feed: {
      Fylke: [
        "Oslo",
        "Møre og romsdal",
        "Rogaland",
        "Nordland",
        "Vestfold og Telemark",
        "Innlandet",
        "Agder",
        "Viken",
        "Vestland",
        "Trøndelag",
        "Troms og Finnmark",
      ],
      nyPost: "",
    },

    PostPopUp: {
      Navn: "",
      Nummer: "",
      Adresse: "",
      E_post: "",
      Beskrivelse: "",
      giBort: null,
      erAnonym: null,
    },

    KontaktSkjema: {
      Navn: "",
      Nummer: "",
      E_post: "",
      Antall: [1, 2, 3, 4, 5, 6, 7, 8],
    },

    BedriftLogIn: {
      BrukerNavn: "",
      Passord: "",
    },
  },

  Users: [
    {
      id: 1,
      navn: "Gilde",
      fylke: "Oslo",
    },
    {
      id: 2,
      navn: "Sander",
      fylke: "Oslo",
    },
    {
      id: 3,
      navn: "Anonym",
      fylke: "Oslo",
    },
  ],

  posts: [
    {
      Navn: "Terje",
      Nummer: "11",
      Adresse: "Veien",
      E_post: "tyesfkj@kcf",
      Beskrivelse: "jsfjsd",
      giBort: true,
      erAnonym: false,
    },
  ],
};
