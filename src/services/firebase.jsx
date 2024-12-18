import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAjLG5vB0Gb4dWuXo4L59xl73zO5kJe1oU",
  authDomain: "padel-shop-10746.firebaseapp.com",
  projectId: "padel-shop-10746",
  storageBucket: "padel-shop-10746.firebasestorage.app",
  messagingSenderId: "435756632667",
  appId: "1:435756632667:web:7156f1de5877f131d14d7e"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)