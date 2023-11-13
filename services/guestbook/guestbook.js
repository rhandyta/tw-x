import { auth, db } from "@/libs/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

export async function store(values) {
  const startOfToday = new Date();
  startOfToday.setUTCHours(0, 0, 0, 0);
  const q = query(
    collection(db, "messages"),
    where("name", "==", auth.currentUser.displayName),
    where("createdAt", ">", startOfToday)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size < 3) {
    const docRef = await addDoc(collection(db, "messages"), {
      name: auth.currentUser.displayName,
      picture: auth.currentUser.photoURL,
      message: values.message,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    if (docRef.id) {
      return true;
    }
  }
  return false;
}
