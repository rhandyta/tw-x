"use server"
import { db } from "@/libs/firebase";
import {
  collection,
  deleteDoc,
  doc,
  endBefore,
  getCountFromServer,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

export async function getDataWorks(lmt = 9, firstVisible, lastVisible) {
  const works = [];
  const coll = collection(db, 'works');
  const snapShotCount = await getCountFromServer(coll);

  let q;
  if (firstVisible || lastVisible) {
    if (lastVisible) {
      let slug = JSON.parse(atob(lastVisible));
      let ref = query(collection(db, 'works'), where('slug', '==', slug), limit(1))
      let docSnap = await getDocs(ref)
      q = query(
        collection(db, "works"),
        orderBy("createdAt", "desc"),
        startAfter(docSnap.docs[docSnap.docs.length - 1]),
        limit(lmt)
      );
    } else {
      let slug = JSON.parse(atob(firstVisible));
      let ref = query(collection(db, 'works'), where('slug', '==', slug), limit(1))
      let docSnap = await getDocs(ref)
      q = query(
        collection(db, "works"),
        orderBy("createdAt", "desc"),
        endBefore(docSnap.docs[0]),
        limitToLast(lmt)
      );
    }
  } else {
    q = query(
      collection(db, "works"),
      orderBy("createdAt", "desc"),
      limit(lmt)
    );
  }

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    works.push(doc.data());
  });
  if (!works) {
    throw new Error("Failed to fetch data");
  }
  return {works, total_data: snapShotCount.data().count};
}

export async function getDataWork(slug) {
  const mainWork = [];
  const relateWorks = [];
  const q = query(collection(db, "works"), where("slug", "==", slug), limit(1));
  const docSnap = await getDocs(q);
  docSnap.forEach((doc) => {
    mainWork.push(doc.data());
  });
  const work = mainWork[0] || null;

  if (mainWork) {
    const relateQ = query(
      collection(db, "works"),
      where("category", "==", work.category),
      where("slug", "!=", work.slug),
      limit(12)
    );
    const docSnapRelate = await getDocs(relateQ);
    docSnapRelate.forEach((doc) => {
      relateWorks.push(doc.data());
    });
    return { work, relateWorks };
  }

  return { work, relateWorks };
}


export async function destroyDoc(slug) {
  const workRef = collection(db, 'works');
  const q = query(workRef, where('slug', '==', slug));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach( async (item) => {
    const docRef = doc(db, 'works', item.id);
    await deleteDoc(docRef);
  }); 
  return true;
}