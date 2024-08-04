// services/pantryService.js

import { db } from '../lib/firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export async function addPantryItem(item) {
  try {
    const docRef = await addDoc(collection(db, "pantryItems"), item);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getPantryItems() {
  try {
    const querySnapshot = await getDocs(collection(db, "pantryItems"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}

export async function updatePantryItem(id, updatedData) {
  try {
    const docRef = doc(db, "pantryItems", id);
    await updateDoc(docRef, updatedData);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function deletePantryItem(id) {
  try {
    const docRef = doc(db, "pantryItems", id);
    await deleteDoc(docRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
