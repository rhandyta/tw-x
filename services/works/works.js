import { db } from "@/libs/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";


export async function getDataWorks(lmt = 6) {
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