// Importa las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5Ras4zNjFr7LZ9DS3qmhjniZmdinvq0g",
  authDomain: "productos-importados-ctes.firebaseapp.com",
  projectId: "productos-importados-ctes",
  storageBucket: "productos-importados-ctes.appspot.com",
  messagingSenderId: "500288569461",
  appId: "1:500288569461:web:22a47509f0c8404ed6f83c",
  measurementId: "G-CD460Q3KQC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);


export const fetchPhonesByCategory = async (category) => {
  try {
    const phonesRef = collection(db, "phones"); // Cambia "phones" con el nombre de tu colección
    const q = query(phonesRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const phones = querySnapshot.docs.map(doc => doc.data());
    return phones;
  } catch (error) {
    console.error("Error fetching phones: ", error);
    return [];
  }
};