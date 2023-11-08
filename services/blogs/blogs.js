import { db } from "@/libs/firebase";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";


export async function getDataBlogs(lmt = 9) {
    const blogsData = [];
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'), limit(lmt));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        blogsData.push(doc.data());
    });

    if (!blogsData) {
        throw new Error('Failed to fetch data')
      }
     
      return blogsData;
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