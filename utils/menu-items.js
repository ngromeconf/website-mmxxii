const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  projectId: 'ngrome-79ce3',
});

var db = firebase.firestore();

var menuItems = [
  {
    name: 'Speakers',
    title: 'Speakers page',
    active: true,
    icon: 'speakers.svg',
    url: '/speakers',
  },
  {
    name: 'Sponsors',
    title: 'Sponsors page',
    active: true,
    icon: 'sponsor.svg',
    url: '/sponsors',
  },
  {
    name: 'Agenda',
    title: 'Agenda page',
    active: true,
    icon: 'agenda.svg',
    url: '/agenda',
  },
  {
    name: 'Workshops',
    title: 'Workshops page',
    active: true,
    icon: 'workshops.svg',
    url: '/workshops',
  },
  {
    name: 'Diversity',
    title: 'Diversity page',
    active: true,
    icon: 'diversity.svg',
    url: '/diversity',
  },
  {
    name: 'About',
    title: 'About page',
    active: true,
    icon: 'about.svg',
    url: '/about',
  },
  {
    name: 'Info',
    title: 'Info page',
    active: true,
    icon: 'info.svg',
    url: '/info',
  },
  {
    name: 'Newsroom',
    title: 'Newsroom page',
    active: true,
    icon: 'newsroom.svg',
    url: '/newsroom',
  },
];

menuItems.forEach(function (obj) {
  db.collection('configuration2020')
    .add(obj)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
