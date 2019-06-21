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
    "description": "",
    "fullDescription": "",
    "homepage": false,
    "image": "",
    "name": "Giorgio Natili",
    "job": "",
    "position": 12,
    "twitter": "",
    "visible": false
  }
 ];

speakers.forEach(function(obj) {
    db.collection("speakers").add(obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
