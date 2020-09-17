const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  projectId: 'ngrome-79ce3',
});

var db = firebase.firestore();

/*var speakers =[
  {
    "company": "theDataWorks",
    "description": "MVP, GDE, Angular ❤️, Book on Angular Routing",
    "fullDescription": "",
    "homepage": false,
    "image": "",
    "name": "Nishu Goel",
    "job": "Engineer @theDataWorks",
    "position": 1,
    "twitter": "DcoustaWilson",
    "visible": false
  },
  {
    "company": "Freelance",
    "description": "@GoogleDevExpert (GDE) / Angular & Web Technologies / @MVPAward Developer Technologies. Open source, and Music in the spare times 🇧🇷 🇦🇺",
    "fullDescription": "",
    "homepage": false,
    "image": "",
    "name": "Wilson Mendes Neto",
    "job": "Google Developer Expert #GDE",
    "position": 2,
    "twitter": "willmendesneto",
    "visible": false
  },
  {
    "company": "Freelance",
    "description": "Juri is a software engineer and freelance trainer. He currently develops modern web and mobile enterprise applications using the web platform, JavaScript and Angular. He is an official Egghead.io instructor where he is one of the top publishers around Angular topics.",
    "fullDescription": "Juri is a software engineer and freelance trainer. He currently develops modern web and mobile enterprise applications using the web platform, JavaScript and Angular. He is an official Egghead.io instructor where he is one of the top publishers around Angular topics.",
    "homepage": false,
    "image": "",
    "name": "Juri Strumpflohner",
    "job": "Google Developer Expert #GDE",
    "position": 3,
    "twitter": "juristr",
    "visible": false
  },
  {
    "company": "Freelance",
    "description": "Freelance software engineer / Avid learner / Co-organiser @ngbeconf / Dad /#GDE ",
    "fullDescription": "",
    "homepage": false,
    "image": "",
    "name": "Sam Vloeberghs",
    "job": "Senior Software Engineer",
    "position": 4,
    "twitter": "samvloeberghs",
    "visible": false
  },
  {
    "company": "",
    "description": "Force of nature. JS dev. Tech speaker. Angry Feminist Harpy. Foodie.",
    "fullDescription": "Often described as a force of nature, Jennifer is a JavaScript developer, speaker, foodie, fitness geek, and community organizer most well known for her work creating innovative and highly sought-after programs for women in technology",
    "homepage": true,
    "image": "",
    "name": "Jennifer Wadella",
    "job": "",
    "position": 5,
    "twitter": "tehfedaykin",
    "visible": true
  },
  {
    "company": "",
    "description": "Speaker, Trainer, Consultant and Author with focus on Angular. Google Developer Expert (GDE) and Microsoft MVP.\n",
    "fullDescription": "",
    "homepage": false,
    "image": "",
    "name": "Manfred Steyer",
    "job": "Consultant",
    "position": 6,
    "twitter": "ManfredSteyer",
    "visible": false
  },
  {
    "company": "",
    "description": "Christian, @GoogleDevExpert in Web Technologies and @angular, located in Portland, OR, USA. Creator of http://lookout.dev",
    "fullDescription": "I have been building web applications since 13, and haven't stopped since. I am focused on using the latest technologies with proven coding methodologies to create sophisticated and elegant software.",
    "homepage": false,
    "image": "",
    "name": "Brian Love",
    "job": "Google Dev Expert",
    "position": 7,
    "twitter": "brian_love",
    "visible": false
  },
  {
    "company": "",
    "description": "",
    "fullDescription": "",
    "homepage": false,
    "image": "",
    "name": "Ermanno Battista",
    "job": "",
    "position": 8,
    "twitter": "ermannobattista",
    "visible": false
  }
 ];*/

var speakers = [{
  "company": "Google",
  "description": "Working on @Angular at Google. Building tools for performance & code quality. Co-founder of http://Rhyme.com acquired by @Coursera. Opinions are my own Flag of Bulgaria",
  "fullDescription": "",
  "homepage": true,
  "image": "https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxx%2FMinkogechev.jpg?alt=media&token=ab028b4d-81ff-4e2a-94df-dcb4a64d0caf",
  "name": "Minko Gechev",
  "job": "Engineer @google",
  "position": 1,
  "twitter": "mgechev",
  "visible": true
}];

speakers.forEach(function(obj) {
    db.collection("speakers2020").add(obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
