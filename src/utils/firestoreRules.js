// src/utils/firestoreRules.js
import { db } from "../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Fetch Firestore rules
export const fetchRules = async () => {
  try {
    const docRef = doc(db, "firestoreRules", "rules");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().rules;
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    throw new Error(`Error fetching rules: ${error.message}`);
  }
};

// Save Firestore rules
export const saveRules = async (rules) => {
  try {
    const docRef = doc(db, "firestoreRules", "rules");
    await setDoc(docRef, { rules });
  } catch (error) {
    throw new Error(`Error saving rules: ${error.message}`);
  }
};
