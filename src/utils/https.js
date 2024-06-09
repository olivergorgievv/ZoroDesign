import { db } from "../config/firebase";
import { doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";
import { getDocs, getDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { QueryClient } from "@tanstack/react-query";

const storage = getStorage();
export const queryClient = new QueryClient();

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

// DELETE A PRODUCT
export const deleteProduct = async ({ id }) => {
  const productDoc = doc(db, "Products", id);
  await deleteDoc(productDoc);
  // navigate("/products");
};

// UPDATE A PRODUCT

export const updateProducts = async (props) => {
  let imageUrl = props.updateImage;
  if (props.updateImage instanceof File) {
    const imageRef = ref(storage, `products${props.updateImage.name}`);
    const snapshot = await uploadBytes(imageRef, props.updateImage);
    imageUrl = await getDownloadURL(snapshot.ref);
  }
  const productDoc = doc(db, "Products", props.id);
  await updateDoc(productDoc, {
    name: props.updateName,
    price: props.updatePrice,
    description: props.updateDescription,
    image: imageUrl,
  });
};

// ADD A PRODUCT
export const addProduct = async (props) => {
  const productsCollectionRef = collection(db, "Products");

  try {
    const imageRef = ref(storage, `products${props.newImage.name}`);
    const snapshot = await uploadBytes(imageRef, props.newImage);
    const imageUrl = await getDownloadURL(snapshot.ref);
    await addDoc(productsCollectionRef, {
      name: props.newProductName,
      description: props.newDescription,
      price: props.newPrice,
      image: imageUrl,
      userId: props.auth?.currentUser?.uid,
    });
  } catch (err) {
    console.error(err);
  }
};
