import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export async function fetchProducts() {
  const productsCollectionRef = collection(db, "Products");

  const data = await getDocs(productsCollectionRef);
  const products = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return products;
}
