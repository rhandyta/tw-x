import { db } from "@/libs/firebase";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";


export async function getDataWorks(lmt = 12) {
    const worksData = [];
    const q = query(collection(db, 'works'), orderBy('createdAt', 'desc'), limit(lmt));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        worksData.push(doc.data());
    });

    if (!worksData) {
        throw new Error('Failed to fetch data')
      }
     
      return worksData;
}


export async function getDataWork(slug) {
    const mainWork = [];
    const relateWorks = [];
    const q = query(collection(db, 'works'), where('slug', '==', slug), limit(1));
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      mainWork.push(doc.data())
    })
    const work = mainWork[0] || null;
  
    if(mainWork) {
      const relateQ = query(collection(db, 'works'), where('category', '==', work.category), where('slug', '!=', work.slug), limit(12));
      const docSnapRelate = await getDocs(relateQ);
      docSnapRelate.forEach(doc => {
        relateWorks.push(doc.data());
      })
      return {work, relateWorks}
    }
  
    return {work, relateWorks};
}