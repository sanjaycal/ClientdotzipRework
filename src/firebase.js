import firebase from 'firebase/app'
import "firebase/database";
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyCfVajxuC8eMIHxgkIW3PH3x-025rXZCAo",
    authDomain: "clientdotzip1.firebaseapp.com",
    databaseURL: "https://clientdotzip1-default-rtdb.firebaseio.com",
    projectId: "clientdotzip1",
    storageBucket: "clientdotzip1.appspot.com",
    messagingSenderId: "821636603910",
    appId: "1:821636603910:web:15bef6db31650d0fd92387",
    measurementId: "G-EH59PDZK4T"
};
firebase.initializeApp(config);
export default firebase;
