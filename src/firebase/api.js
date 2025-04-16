import { db } from './init';
import { collection, getDocs ,getDoc,startAt,startAfter,addDoc,query, orderBy, limit,where ,doc, setDoc, updateDoc, serverTimestamp }  from 'firebase/firestore/lite';

// export const addanswer = async (title,desc,caseStudy, arrtechnoTags,arrprojectTags,content,deskview,phoneview,github,live,arrycati,id) => {
//   await setDoc(doc(db, "answers", caseStudy), { title,desc,caseStudy, arrtechnoTags,arrprojectTags,content,deskview,phoneview,github,live,arrycati,id} )
// };




export const addanswer = async (surveyData) => {
    try {
      // Generate a unique ID for this answer
      const answerId = doc(collection(db, "answers")).id;
      
      // Create the document with the provided data
      await setDoc(doc(db, "answers", answerId), { 
        ...surveyData,
        timestamp: serverTimestamp(),
        id: answerId
      });
      
      return { success: true, id: answerId };
    } catch (error) {
      console.error("Error adding survey answer:", error);
      return { success: false, error: error.message };
    }
  };