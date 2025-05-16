import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZfwRH2n9MJJp41-xMsdUvR8tCk3Vqi-g",
  authDomain: "netflix-afroz.firebaseapp.com",
  projectId: "netflix-afroz",
  storageBucket: "netflix-afroz.firebasestorage.app",
  messagingSenderId: "925774338620",
  appId: "1:925774338620:web:501a091c52e9ab6e3b0139"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
