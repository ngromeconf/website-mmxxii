const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  projectId: 'ngrome-79ce3',
});

var dataObjectName = 'agenda2021';

var db = firebase.firestore();

var agenda = [
  {
    speakerName: '',
    company: '',
    startTime: '07 09 2020 14:00:00 UTC+2',
    endTime: '07 09 2020 14:03:00 UTC+2',
    title: 'Opening Remarks',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: 'John Papa',
    company: 'Microsoft',
    startTime: '07 09 2021 14:04:00 UTC+2',
    endTime: '07 09 2021 14:35:00 UTC+2',
    title: 'Opening Keynote',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2FJohn-Papa%201.png?alt=media&token=922fd96d-ada8-4416-917a-aede3a547a92',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Fabian Gosebrink',
    company: '',
    startTime: '07 09 2021 14:36:00 UTC+2',
    endTime: '07 09 2021 14:51:00 UTC+2',
    title: 'Angular Architectures with NgRx Stores & Effects',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2FFabian-Gosebrink%201.png?alt=media&token=cb851796-fa46-4c67-9311-b0b4d1839bbe',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Almaviva Digital Tech',
    company: '',
    startTime: '07 09 2021 14:52:00 UTC+2',
    endTime: '07 09 2021 14:58:00 UTC+2',
    title: 'Sponsor Talk',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FAlmavivADigitalte.png?alt=media&token=f51927de-b1cd-4def-8675-d9c66031b9c4',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '07 09 2021 14:58:00 UTC+2',
    endTime: '07 09 2021 15:12:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  // {
  //   speakerName: '',
  //   company: '',
  //   startTime: '07 09 2021 16:05:00 UTC+2',
  //   endTime: '07 09 2021 16:20:00 UTC+2',
  //   title: 'Coffee Break',
  //   description: '',
  //   image: '',
  //   type: 'Activity',
  //   visible: true,
  // },
  {
    speakerName: 'Jeffrey Bosch',
    company: '',
    startTime: '07 09 2021 15:12:00 UTC+2',
    endTime: '07 09 2021 15:27:00 UTC+2',
    title: 'Angular Builders, the cool kid under the CLI hood',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2Fjeffrey-bosch%201.png?alt=media&token=c4983c57-874f-41dc-95c2-ca9d92f84939',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Alisa Duncan',
    company: '',
    startTime: '07 09 2021 15:28:00 UTC+2',
    endTime: '07 09 2021 17:53:00 UTC+2',
    title: 'Tidy up your tests using component harnesses to write tests that bring you joy',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2FAlisa-Dunbkan%201.png?alt=media&token=0614b612-74f5-469a-8d09-88c8eb3a36ab',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'ICT Group',
    company: '',
    startTime: '07 09 2021 15:54:00 UTC+2',
    endTime: '07 09 2021 15:59:00 UTC+2',
    title: 'Sponsor Talk',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FICTGROUP-logo.svg?alt=media&token=c38f7bea-cc9e-4533-bb4b-7b7b9911d316',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '07 09 2021 16:00:00 UTC+2',
    endTime: '07 09 2021 16:13:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: 'Trung Vo',
    company: '',
    startTime: '07 09 2021 16:14:00 UTC+2',
    endTime: '07 09 2021 16:29:00 UTC+2',
    title: 'Scalable Nx Structure for Angular application',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2FTrung-Vo%201.png?alt=media&token=7d1fdbfa-6487-46be-aff0-c3375490e8fc',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Bonnie Brennan',
    company: '',
    startTime: '07 09 2021 16:30:00 UTC+2',
    endTime: '07 09 2021 16:45:00 UTC+2',
    title: 'Visual DOM Manipulation',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2Fbonnie-brennan%201.png?alt=media&token=4cbccdb5-fed6-44eb-917c-5631cbd5f6e7',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Mark Techson',
    company: '',
    startTime: '07 09 2021 16:46:00 UTC+2',
    endTime: '07 09 2021 17:17:00 UTC+2',
    title: 'Closing Keynote',
    description: 'Coming soon',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxi%2FMark-Techson%201.png?alt=media&token=3caa3896-1ddb-4ccf-ace9-8a0db1840bdf',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '07 09 2021 17:18:00 UTC+2',
    endTime: '07 09 2021 17:31:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '07 09 2021 17:32:00 UTC+2',
    endTime: '07 09 2021 17:40:00 UTC+2',
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

  db.collection(dataObjectName)
    .add(obj)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
