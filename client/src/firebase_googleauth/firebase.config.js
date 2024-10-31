import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyBipRybsKPqTgh7STDeJnEtsOyKMEVrPlY",
    authDomain: "home-rentals-2f1b7.firebaseapp.com",
    projectId: "home-rentals-2f1b7",
    storageBucket: "home-rentals-2f1b7.appspot.com",
    messagingSenderId: "539670245432",
    appId: "1:539670245432:web:21291796f910d62e81b6cd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' }); 
console.log(googleProvider);  


export { auth, googleProvider };
