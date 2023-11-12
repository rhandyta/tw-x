"use server"
import { db } from "@/libs/firebase";
import { collection, deleteDoc, doc, getCountFromServer, getDocs, limit, orderBy, query, where } from "firebase/firestore";


export async function getDataBlogs(lmt = 9, firstVisible, lastVisible) {
  const blogs = [];
  const coll = collection(db, 'blogs');
  const snapShotCount = await getCountFromServer(coll);

  let q;
  if (firstVisible || lastVisible) {
    if (lastVisible) {
      let slug = JSON.parse(atob(lastVisible));
      let ref = query(collection(db, 'blogs'), where('slug', '==', slug), limit(1))
      let docSnap = await getDocs(ref)
      q = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        startAfter(docSnap.docs[docSnap.docs.length - 1]),
        limit(lmt)
      );
    } else {
      let slug = JSON.parse(atob(firstVisible));
      let ref = query(collection(db, 'blogs'), where('slug', '==', slug), limit(1))
      let docSnap = await getDocs(ref)
      q = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        endBefore(docSnap.docs[0]),
        limitToLast(lmt)
      );
    }
  } else {
    q = query(
      collection(db, "blogs"),
      orderBy("createdAt", "desc"),
      limit(lmt)
    );
  }

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    blogs.push(doc.data());
  });
  if (!blogs) {
    throw new Error("Failed to fetch data");
  }
  return {blogs, total_data: snapShotCount.data().count};
}


export async function getDataBlog(slug) {
    const mainBlog = [];
    const relateBlogs = [];
    const q = query(collection(db, 'blogs'), where('slug', '==', slug), limit(1));
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      mainBlog.push(doc.data())
    })
    const blog = mainBlog[0] || null;
  
    if(mainBlog) {
      const relateQ = query(collection(db, 'blogs'), where('category', '==', blog.category), where('slug', '!=', blog.slug), limit(12));
      const docSnapRelate = await getDocs(relateQ);
      docSnapRelate.forEach(doc => {
        relateBlogs.push(doc.data());
      })
      return {blog, relateBlogs}
    }
  
    return {blog, relateBlogs};
}

export async function destroyDoc(slug) {
  const workRef = collection(db, 'blogs');
  const q = query(workRef, where('slug', '==', slug));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach( async (item) => {
    const docRef = doc(db, 'blogs', item.id);
    await deleteDoc(docRef);
  }); 
  return true;
}