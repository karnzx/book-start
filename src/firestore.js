import  firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBBY2rEwcby7Iq6CEX6jDdcc2af6vqqRe8",
    authDomain: "book-store-8d5ce-64cb3.firebaseapp.com",
    databaseURL: "https://book-store-8d5ce-64cb3.firebaseio.com",
    projectId: "book-store-8d5ce",
    storageBucket: "book-store-8d5ce.appspot.com",
    messagingSenderId: "653332783894"
  };
  
firebase.initializeApp(config);
const db = firebase.firestore();
export default db;