import { db } from "../config/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getDocs, getDoc, collection } from "firebase/firestore";

// FETCH ALL EVENTS
export const fetchProducts = async ({ id }) => {
  try {
    if (id) {
      // Fetch single product by ID
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
    } else {
      // Fetch all products
      const productsCollectionRef = collection(db, "Products");
      const data = await getDocs(productsCollectionRef);
      const products = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return products;
    }
  } catch (error) {
    throw new Error(`Error fetching product${id ? "" : "s"}: ${error.message}`);
  }
};

// DELETE AN EVENT
export const deleteProduct = async ({ id }) => {
  const productDoc = doc(db, "Products", id);
  await deleteDoc(productDoc);
  // navigate("/products");
};

// UPDATE AN EVENT

export const updateProducts = async (
  props
  // updateImg
) => {
  const productDoc = doc(db, "Products", props.id);
  await updateDoc(productDoc, {
    name: props.updateName,
    price: props.updatePrice,
    description: props.updateDescription,
  });
};

// LOGIN STATE
