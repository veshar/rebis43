
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, query, where, doc,  collection, setDoc, addDoc,Timestamp} from "firebase/firestore"

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
    const docref = doc(appFirestore, "items", itemId);



    const docSnapshot = await getDoc(docref);

    return {id: docSnapshot.id, ...docSnapshot.data()};
    
}

export async function exportDataToFirestore(){
    const productos = [
    {
        id: 1,
        name: "Love Hope Peace",
        price: 200,
        stock: 4,
        img:"https://rebis43.com/wp-content/uploads/2022/01/18102-5.jpg",
        category: "playeras",
        description: "Lorem ipsum..."
    },
    {
        id: 2,
        name: "Vicario",
        price: 200,
        stock: 4,
        img:"https://rebis43.com/wp-content/uploads/2022/01/18518-4.jpg",
        category: "playeras",
        description: "Lorem ipsum..."
    },
    {
        id: 3,
        name: "Scorpio",
        price: 200,
        stock: 4,
        img:"https://rebis43.com/wp-content/uploads/2022/01/18102.jpg",
        category: "playeras",
        description: "Lorem ipsum..."
    },
    {
        id: 5,
        name: "Heka Hoodie",
        price: 200,
        stock: 4,
        img:"https://rebis43.com/wp-content/uploads/2022/01/68154-5.jpg",
        category: "hoodies",
        description: "Lorem ipsum..."
    },
    {
        id: 5,
        name: "Heka Gorra",
        price: 200,
        stock: 4,
        img:"https://rebis43.com/wp-content/uploads/2022/01/45138-7.jpg",
        category: "gorras",
        description: "Lorem ipsum..."
    }
];
const itemCollection = collection(appFirestore, "items");
productos.forEach((item) => {
    const newDoc = doc(itemCollection);
    setDoc(newDoc, item)
      .then((res) => {
        console.log("Documento guardado:", newDoc.id);
      })
      .catch((error) => console.log("error obteniendo los datos: ", error));
  });

}

export async function createBuyOrder(dataOrder) {
  const orderColectionRef = collection(appFirestore, "orders");
  const dateTimestamp = Timestamp.now();

  const dataOrderWithDate = {
    ...dataOrder,
    date: dateTimestamp,
  };

  const orderCreated = await addDoc(orderColectionRef, dataOrderWithDate);

  return orderCreated;
}


export default appFirebase