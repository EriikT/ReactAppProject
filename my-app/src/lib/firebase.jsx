import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc, collection, query, where, GeoPoint, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFKdeSH1J1EH90Dm1x-5fWSeODtDmu74s",
  authDomain: "workword-7e6f7.firebaseapp.com",
  projectId: "workword-7e6f7",
  storageBucket: "workword-7e6f7.firebasestorage.app",
  messagingSenderId: "25885299194",
  appId: "1:25885299194:web:84814f559038d4fb541443"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      window.alert(`Signed in with ${user.email}`);
      // window.location.reload();
    } catch (e) {
      window.alert(e.message);
    }
  };
  
  export const signOutFromGoogle = async () => {
    try {
      await auth.signOut();
      window.alert("Signed out!");
      // window.location.reload();
    } catch (e) {
      window.alert(e.message);
    }
  };


