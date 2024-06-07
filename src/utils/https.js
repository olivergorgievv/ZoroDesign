import { db } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { getDocs, getDoc, collection } from "firebase/firestore";

// FETCH ALL EVENTS
export async function fetchProducts() {
  const productsCollectionRef = collection(db, "Products");
  const data = await getDocs(productsCollectionRef);
  const products = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return products;
}

// DELETE AN EVENT
export const deleteProduct = async ({ id }) => {
  const productDoc = doc(db, "Products", id);
  await deleteDoc(productDoc);
  // navigate("/products");
};

// FETCH ONLY A SINGLE EVENT

export const fetchSingleProducts = async ({ id }) => {
  try {
    const productDocRef = doc(db, "Products", id);
    const docSnap = await getDoc(productDocRef);

    if (docSnap.exists()) {
      const productData = {
        ...docSnap.data(),
        id: docSnap.id,
      };
      return productData;
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    throw new Error("Error fetching product:", error);
  }
};
