const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  projectId: 'ngrome-79ce3',
});

var db = firebase.firestore();

var speakers = [
  {
    image: '',
    name: 'Angular Roma',
    description: '',
    visible: true,
    websiteUrl: 'https://twitter.com/angularroma',
    type: 'main-partner',
  },
  {
    image: '',
    name: 'Angular San Francisco',
    description: '',
    visible: true,
    websiteUrl: 'https://twitter.com/angularsf',
    type: 'main-partner',
  },
  {
    image: '',
    name: 'ICT Group',
    description: '',
    visible: true,
    websiteUrl: 'https://www.ict-group.it/',
    type: 'gold',
  },
  {
    image: '',
    name: 'Almaviva',
    description: '',
    visible: true,
    websiteUrl: 'https://www.almaviva.it/',
    type: 'platinum',
  },
  {
    image: '',
    name: 'GDG Roma',
    description: 'Google Developes Groups Roma',
    visible: false,
    websiteUrl: 'https://developers.google.com/community/gdg/',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.codemotion.com/',
    name: 'Codemotion',
    description: '',
    visible: false,
    image: './assets/images/codemotion.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://twitter.com/AngularVienna',
    name: 'Angular Vienna',
    description: '',
    visible: false,
    image: './assets/images/ng-vienna.png',
    type: 'community',
  },
  {
    websiteUrl: 'http://ng-girls.org/',
    name: 'ngGirls',
    description: '',
    visible: false,
    image: './assets/images/ng-girls.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://ngvikings.org',
    name: 'ngVikings',
    description: '',
    visible: false,
    image: './assets/images/ng-vikings.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://ng-atl.org/',
    name: 'ngAtlanta',
    description: '',
    visible: false,
    image: './assets/images/ng-atlanta.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/AngularJS-Bucharest/',
    name: 'ngBucharest',
    description: '',
    visible: false,
    image: './assets/images/ng-bucharest.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://twitter.com/swissangular',
    name: 'Swiss Angular',
    description: '',
    visible: false,
    image: './assets/images/swiss-angular.png',
    type: 'community',
  },
  {
    image: './assets/images/gdg-roma.png',
    name: 'GDG Roma',
    description: '',
    visible: false,
    websiteUrl: 'https://www.meetup.com/it-IT/GDG-Roma/',
    type: 'community',
  },
  {
    image: './assets/images/gdg-vda.png',
    name: "GDG Valle d'Aosta",
    description: '',
    visible: false,
    websiteUrl: 'https://www.gdgvda.it/',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/GDG-Bari/',
    name: 'GDG Bari',
    description: '',
    visible: false,
    image: './assets/images/gdg-bari.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://djangogirls.org/',
    name: 'Django Girls',
    description: '',
    visible: false,
    image: './assets/images/django-girls-italy.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/it-IT/gdgbologna/',
    name: 'GDG Bologna',
    description: '',
    visible: false,
    image: './assets/images/gdg-bologna.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/GDG-Pescara/',
    name: 'GDG Pescara',
    description: '',
    visible: false,
    image: './assets/images/gdg-pescara.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/it-IT/GDGCampania/',
    name: 'GDG Campania',
    description: '',
    visible: false,
    image: './assets/images/gdg-campania.jpg',
    type: 'community',
  },
  {
    websiteUrl: 'http://romajs.org/',
    name: 'Roma JS',
    description: '',
    visible: false,
    image: './assets/images/roma-js.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/GDG-Toulouse/',
    name: 'GDG Toulouse',
    description: '',
    visible: false,
    image: './assets/images/gdg-toulouse.png',
    type: 'community',
  },
  {
    websiteUrl: 'http://www.gdgreggioemilia.it/',
    name: 'GDG Reggio Emilia',
    description: '',
    visible: false,
    image: './assets/images/gdg-reggio-emilia.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/it-IT/Agile_Talks/',
    name: 'Swiss Angular',
    description: '',
    visible: false,
    image: './assets/images/agile-talks.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/it-IT/DotNetCode/',
    name: 'DotNetCode',
    description: '',
    visible: false,
    image: './assets/images/DotNetCode.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://gdgtorino.it/',
    name: 'GDG Torino',
    description: '',
    visible: false,
    image: './assets/images/gdg-torino.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.meetup.com/it-IT/GDG-Venezia/',
    name: 'GDG Venezia',
    description: '',
    visible: false,
    image: './assets/images/gdg-venezia.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://gdgtrento.it/',
    name: 'GDG Trento',
    description: '',
    visible: false,
    image: './assets/images/gdg-trento.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://gdgpisa.it/',
    name: 'GDG Pisa',
    description: '',
    visible: false,
    image: './assets/images/gdg-pisa.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.facebook.com/womentechmakersit/',
    name: 'Women Tech Maker - Italia',
    description: '',
    visible: false,
    image: './assets/images/wtm-italia.png',
    type: 'community',
  },
  {
    websiteUrl: 'https://www.gdgcatania.org/',
    name: 'GDG Catania',
    description: '',
    visible: false,
    image: './assets/images/gdg-catania.jpg',
    type: 'community',
  },
  {
    websiteUrl: 'http://www.gdgnebrodi.info/',
    name: 'GDG Nebrodi',
    description: '',
    visible: false,
    image: './assets/images/gdg-nebrodi.png',
    type: 'community',
  },
];

speakers.forEach(function (obj) {
  db.collection('sponsor2020')
    .add(obj)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
