// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfR3FO2ge_p0rNA6oWfojL5Hij27YK9GE",
    authDomain: "finalproject-bc90e.firebaseapp.com",
    databaseURL: "https://finalproject-bc90e-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "finalproject-bc90e",
    storageBucket: "finalproject-bc90e.appspot.com",
    messagingSenderId: "254180047382",
    appId: "1:254180047382:web:e69319a66cea9ed2585337",
    measurementId: "G-557KQL8079"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }