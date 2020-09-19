const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  projectId: 'ngrome-79ce3',
});

var db = firebase.firestore();

var agenda = [
  {
    speakerName: '',
    company: '',
    startTime: '10 20 2020 14:00:00 UTC+2',
    endTime: '10 20 2020 14:10:00 UTC+2',
    title: 'Opening Remarks',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: 'Manfred Steyer',
    company: 'Freelance',
    startTime: '10 20 2020 14:10:00 UTC+2',
    endTime: '10 20 2020 14:40:00 UTC+2',
    title: 'Coming soon',
    description: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2Fmanfredsteyer.png?alt=media&token=6f6138f5-531e-403e-ba73-b1487aedd8a4',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Ermanno Battista',
    company: '',
    startTime: '10 20 2020 14:40:00 UTC+2',
    endTime: '10 20 2020 14:50:00 UTC+2',
    title: '',
    description: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2Fermannobattista.png?alt=media&token=084c9072-5262-43c8-8ff8-957f4db568ec',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Sam Vloeberghs',
    company: '',
    startTime: '10 20 2020 14:50:00 UTC+2',
    endTime: '10 20 2020 15:20:00 UTC+2',
    title: '',
    description: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2Fsamvloeberghs.png?alt=media&token=e0eecd5a-4bdf-43aa-8df2-fa9124669318',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Nishu Goel',
    company: '',
    startTime: '10 20 2020 15:20:00 UTC+2',
    endTime: '10 20 2020 15:35:00 UTC+2',
    title: 'Angular libraries with v10',
    description:
      "Building and packaging libraries using Angular. We will also see what's new with peer dependencies starting Angular v10. Does it break already existing Angular libraries? Join me to explore more!",
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2FNishugoel.png?alt=media&token=75e2d022-99e0-414f-ba6b-5cad1ee73128',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '10 20 2020 15:35:00 UTC+2',
    endTime: '10 20 2020 16:05:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '10 20 2020 16:05:00 UTC+2',
    endTime: '10 20 2020 16:20:00 UTC+2',
    title: 'Coffee Break',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: 'Juri Strumpflohner',
    company: '',
    startTime: '10 20 2020 16:20:00 UTC+2',
    endTime: '10 20 2020 16:50:00 UTC+2',
    title: '',
    description: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fjuri.png?alt=media&token=63c66548-b1f7-4a2f-a120-7e73ddff6910',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Jennifer Wadella',
    company: '',
    startTime: '10 20 2020 16:50:00 UTC+2',
    endTime: '10 20 2020 17:20:00 UTC+2',
    title: '',
    description: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2Fjennifer%20wadella.png?alt=media&token=b7370df3-5cd7-4c40-a8f0-69fe5adbeb61',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Brian Love',
    company: '',
    startTime: '10 20 2020 17:20:00 UTC+2',
    endTime: '10 20 2020 17:40:00 UTC+2',
    title: '',
    description: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2Fbrianlove.png?alt=media&token=5ea63a65-6e27-49e0-877c-f4c3ccc8fc21',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Minko Gechev',
    company: '',
    startTime: '10 20 2020 17:40:00 UTC+2',
    endTime: '10 20 2020 18:20:00 UTC+2',
    title: 'Closing Keynote',
    description: 'Coming soon',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2FMinkogechev.jpg?alt=media&token=ab028b4d-81ff-4e2a-94df-dcb4a64d0caf',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '10 20 2020 18:20:00 UTC+2',
    endTime: '10 20 2020 18:50:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '10 20 2020 18:50:00 UTC+2',
    endTime: '10 20 2020 19:00:00 UTC+2',
    title: 'Closing Remarks',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
];

agenda.forEach(function (obj) {
  console.log('Write the item: ', obj.speakerName);

  let startTime = new Date(obj.startTime);
  let endTime = new Date(obj.endTime);

  obj.startTime = firebase.firestore.Timestamp.fromDate(startTime);
  obj.endTime = firebase.firestore.Timestamp.fromDate(endTime);

  db.collection('agenda2020')
    .add(obj)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
