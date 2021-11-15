import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAyL6RjzeoQduxGwl6MqBtVw6vgxl94hGs",
    authDomain: "ayaanc87-fd5a3.firebaseapp.com",
    databaseURL: "https://ayaanc87-fd5a3-default-rtdb.firebaseio.com",
    projectId: "ayaanc87-fd5a3",
    storageBucket: "ayaanc87-fd5a3.appspot.com",
    messagingSenderId: "865669363664",
    appId: "1:865669363664:web:391098fc4e16de84ffebd5"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.database();