
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, query, where, doc,  collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdhh4YSjhWUzQKoar9ukMBngGeCVUjQSw",
  authDomain: "ecommerce-rebis43.firebaseapp.com",
  projectId: "ecommerce-rebis43",
  storageBucket: "ecommerce-rebis43.appspot.com",
  messagingSenderId: "944838302516",
  appId: "1:944838302516:web:ef7433431336097a9be361"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);


export async function traerProductos(){
    const itemCollection = collection(appFirestore, "items");
    const itemsSnapshot = await getDocs(itemCollection);


    let respuesta = itemsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        
        }
    })


    return respuesta;
}

export async function traerProductosDeCategoria(idcategory){

    const itemCollection = collection(appFirestore, "items");
    const q = query(itemCollection,where("category", "==", idcategory));
    const itemSnapshot = await getDocs(q);

    let respuesta = itemSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return respuesta
}

export async function traerUnProducto(itemId){
    const itemCollection = collection(appFirestore, "items");
    const docref = doc(itemCollection, itemId);

    const docSnapshot = await getDoc(docref);

    return {id: docSnapshot.id, ...docSnapshot.data()};
    
}

export default appFirebase