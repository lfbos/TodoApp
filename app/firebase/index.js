import firebase from 'firebase';

try {
 var config = {
   apiKey: "AIzaSyASLhPOqfCNpznzw7_MknJmNUS30-X-SWs",
   authDomain: "l-todo-app.firebaseapp.com",
   databaseURL: "https://l-todo-app.firebaseio.com",
   storageBucket: "l-todo-app.appspot.com",
   messagingSenderId: "1052914923022"
 };

 firebase.initializeApp(config);
} catch (e) {
 /* Empty */
}

export var firebaseRef = firebase.database().ref();

export default firebase;
