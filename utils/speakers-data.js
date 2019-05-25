const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
});

var db = firebase.firestore();

var speakers =[
  {
    "company": "",
    "description": "Sam is a dyslexic speaker, volunteer, teacher, developer, and a recently graduated high school student in Houston, Texas. She enjoys learning, tinkering, and making things visual.",
    "fullDescription": "",
    "homepage": false,
    "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2FSamantha.png?alt=media&token=d28593a6-7191-40fe-8bd9-4e34ad328319",
    "name": "Samantha Rhodes",
    "job": "Teacher and web developer",
    "position": 6,
    "twitter": "thelittlestdev",
    "visible": false
  },
  {
    "company": "Cosmose AI",
    "description": "",
    "fullDescription": "",
    "homepage": false,
    "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmarta.png?alt=media&token=5aa6f1fe-0845-4caa-8aea-5af8efbfb9d8",
    "name": "Marta Wiśniewska",
    "job": "Angular Dev",
    "position": 7,
    "twitter": "MartaW_PL",
    "visible": false
  },
  {
    "company": "Alfresco",
    "description": "Maurizio is a Tech Lead at Alfresco. Currently, he is leading the Process Workspace App, an Angular app based on Activiti 7 Cloud with a focus on the CI/CD.",
    "fullDescription": "",
    "homepage": false,
    "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2FMaurizio.png?alt=media&token=3961bc03-2293-45d4-b053-c13e16e033e7",
    "name": "Maurizio Vitale",
    "job": "Software Engineer",
    "position": 7,
    "twitter": "mauriziovitale_",
    "visible": false
  },
  {
    "company": "",
    "description": "Fabian is Microsoft MVP, GDE and Angular & ASP.NET Core web developer. As a software engineer, consultant, speaker and trainer, he supports customers building web applications with more than 10 years of experience. Fabian is very active in the community such as leading the swiss angular community: SwissAngular",
    "fullDescription": "",
    "homepage": false,
    "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Ffabian.png?alt=media&token=07824755-f922-41af-910b-d6b5aefd0cac",
    "name": "Fabian Gosebrink",
    "job": "Google Developer Expert",
    "position": 8,
    "twitter": "FabianGosebrink",
    "visible": false
  },
  {
    "company": "OVH",
    "description": "Horacio is a Google Developer Expert (GDE) en Web Technologies and Flutter. He loves web development in general and everything around Web Components and standards web in particular.",
    "fullDescription": "",
    "homepage": false,
    "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2FHoracio.png?alt=media&token=7d4bf88d-9be0-4966-ae7f-91cb57e59a7a",
    "name": "Horacio Gonzalez",
    "job": "Google Developer Expert",
    "position": 9,
    "twitter": "LostInBrittany",
    "visible": false
  },
  {
    "company": "Bitcrowd",
    "description": "",
    "fullDescription": "",
    "homepage": false,
    "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2FJosie.png?alt=media&token=e0c026a9-3e6a-40f2-9f85-354641bf10a6",
    "name": "Josie",
    "job": "Developer",
    "position": 9,
    "twitter": "iozefina_nagy",
    "visible": false
  },
 ];

speakers.forEach(function(obj) {
    db.collection("speakers").add(obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
