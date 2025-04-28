import { db } from './init';
import { collection, getDocs ,getDoc,startAt,startAfter,addDoc,query, orderBy, limit,where ,doc, setDoc, updateDoc, serverTimestamp }  from 'firebase/firestore/lite';



// export const addanswer = async (surveyData) => {
//     try {
//       const answerId = doc(collection(db, "answers")).id;
//             await setDoc(doc(db, "answers", answerId), { 
//         ...surveyData,
//         timestamp: serverTimestamp(),
//         id: answerId
//       });
      
//       return { success: true, id: answerId };
//     } catch (error) {
//       console.error("Error adding survey answer:", error);
//       return { success: false, error: error.message };
//     }
//   };

  export const addanswer = async (surveyData) => {
    try {
      const docRef = await addDoc(collection(db, "answers"), {
        ...surveyData,
        timestamp: serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error adding survey answer:", error);
      return { success: false, error: error.message };
    }
  };