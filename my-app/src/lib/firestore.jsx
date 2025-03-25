import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { app } from './firebase'; // Make sure you have your Firebase app initialized

const db = getFirestore(app);

export async function getUserProfile(userId) {
    try {
      const userRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No profile found for user:", userId);
        return null;
      }
    } catch (error) {
      console.error("Error getting user profile:", error);
      return null;
    }
}

export async function createUserProfile(userId, profileData) {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, profileData);
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
}