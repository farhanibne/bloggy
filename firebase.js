import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCVsEqv7dyhVe_xWa4GKmEH0mlUFvBK8EU",
  authDomain: "blogger-dz.firebaseapp.com",
  projectId: "blogger-dz",
  storageBucket: "blogger-dz.appspot.com",
  messagingSenderId: "1082140854014",
  appId: "1:1082140854014:web:cf6d9a9e971b5041c0c7af",
  measurementId: "G-EN898TRHVF"
  
  };


if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth,db,storage,serverTimestamp}


