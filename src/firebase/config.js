
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC5Ras4zNjFr7LZ9DS3qmhjniZmdinvq0g",
  authDomain: "productos-importados-ctes.firebaseapp.com",
  projectId: "productos-importados-ctes",
  storageBucket: "productos-importados-ctes.appspot.com",
  messagingSenderId: "500288569461",
  appId: "1:500288569461:web:22a47509f0c8404ed6f83c",
  measurementId: "G-CD460Q3KQC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);