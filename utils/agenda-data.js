import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Timestamp } from 'firebase-admin/firestore';




// const debug = require('debug')('firestore-snippets-node');

// // [START firestore_deps]
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// // [END firestore_deps]


async function initializeAppWithProjectId() {
  // [START firestore_setup_client_create]

  const app =  firebase.initializeApp({
    // The `projectId` parameter is optional and represents which project the
    // client will act on behalf of. If not supplied, it falls back to the default
    // project inferred from the environment.
    projectId: 'ngrome-79ce3',
  });
  const db = firebase.firestore(app);
  // [END firestore_setup_client_create]
  return db;
}

const dataObjectName = 'agenda2022';
const db = initializeAppWithProjectId();


var agenda = [
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 8:00:00 UTC+2',
    endTime: '02 12 2022 9:00:00 UTC+2',
    title: 'Registration & Coffee',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 9:00:00 UTC+2',
    endTime: '02 12 2022 9:10:00 UTC+2',
    title: 'Opening Remarks',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: 'Microsoft',
    startTime: '02 12 2022 9:10:00 UTC+2',
    endTime: '02 12 2022 9:50:00 UTC+2',
    title: 'Opening Keynote',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 9:50:00 UTC+2',
    endTime: '02 12 2022 10:15:00 UTC+2',
    title: 'Talk 1',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 10:15:00 UTC+2',
    endTime: '02 12 2022 10:25:00 UTC+2',
    title: 'Lightning Talk 1',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: 'Almaviva Digital Tech',
    company: '',
    startTime: '02 12 2022 10:25:00 UTC+2',
    endTime: '02 12 2022 10:30:00 UTC+2',
    title: 'Sponsor Talk',
    description: '',
    image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FAlmavivADigitalte.png?alt=media&token=f51927de-b1cd-4def-8675-d9c66031b9c4',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 10:30:00 UTC+2',
    endTime: '02 12 2022 10:50:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 10:50:00 UTC+2',
    endTime: '02 12 2022 11:15:00 UTC+2',
    title: 'Coffee Break',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: 'Soumaya Erradi',
    company: '',
    startTime: '02 12 2022 11:15:00 UTC+2',
    endTime: '02 12 2022 11:40:00 UTC+2',
    title: 'Web3 and Angular, how to get out alive',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 11:15:00 UTC+2',
    endTime: '02 12 2022 11:40:00 UTC+2',
    title: 'Lightning Talks 2',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 11:50:00 UTC+2',
    endTime: '02 12 2022 12:15:00 UTC+2',
    title: 'Talks 3',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 12:15:00 UTC+2',
    endTime: '02 12 2022 12:20:00 UTC+2',
    title: 'Sponsor Talk Platinum',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 12:20:00 UTC+2',
    endTime: '02 12 2022 12:40:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 12:40:00 UTC+2',
    endTime: '02 12 2022 13:40:00 UTC+2',
    title: 'Lunch',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 13:40:00 UTC+2',
    endTime: '02 12 2022 14:05:00 UTC+2',
    title: 'Talk 4',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 14:05:00 UTC+2',
    endTime: '02 12 2022 14:15:00 UTC+2',
    title: 'Lightning Talks 3',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 14:15:00 UTC+2',
    endTime: '02 12 2022 14:40:00 UTC+2',
    title: 'Talk 5',
    description: '',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 14:40:00 UTC+2',
    endTime: '02 12 2022 15:00:00 UTC+2',
    title: 'Speaker Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 15:00:00 UTC+2',
    endTime: '02 12 2022 15:25:00 UTC+2',
    title: 'Coffee Break',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: 'Mike Ryan & Brian Love',
    company: '',
    startTime: '02 12 2022 15:50:00 UTC+2',
    endTime: '02 12 2022 16:30:00 UTC+2',
    title: 'Closing Keynote',
    description: 'A Fistful of Angulars',
    image:'',
    type: 'Talk',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 16:30:00 UTC+2',
    endTime: '02 12 2022 16:50:00 UTC+2',
    title: 'Final Panel',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 16:50:00 UTC+2',
    endTime: '02 12 2022 17:00:00 UTC+2',
    title: 'Closing Remarks',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
  {
    speakerName: '',
    company: '',
    startTime: '02 12 2022 17:00:00 UTC+2',
    endTime: '02 12 2022 18:00:00 UTC+2',
    title: 'After Party',
    description: '',
    image: '',
    type: 'Activity',
    visible: true,
  },
];


async function setDocument(db, object) {

  // Add a new document in collection "cities" with ID 'LA'
  const res = await db.collection(dataObjectName).add(object);
  // [END firestore_data_set_from_map]

  console.log('Set: ', res);

}
// [START firestore_data_set_from_map]
agenda.forEach(function (obj) {
  console.log('Prepare the item to write to db: ', obj);

  let startTime = new Date(obj.startTime);
  let endTime = new Date(obj.endTime);

  console.log(startTime, endTime);

  obj.startTime = Timestamp.fromDate(startTime);
  obj.endTime = Timestamp.fromDate(endTime);


  // Add a new document in collection "cities" with ID 'LA'
  setDocument(db, obj);
  // [END firestore_data_set_from_map]

});
