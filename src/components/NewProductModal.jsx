/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
//Firebase Storage
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createPortal } from "react-dom";

function NewProductModal({ onClose }) {
  const productsCollectionRef = collection(db, "Products");

  // Initialize Firebase Storage
  const storage = getStorage();

  // HANDLE ONSUBMIT FORM
  const [newProductName, setNewProductName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newImage, setNewImage] = useState(null);

  const onSubmitProduct = async (event) => {
    event.preventDefault();

    if (!newImage) {
      console.error("no Image file Selected");
      return;
    }

    try {
      // ACCESS STORAGE FOR IMAGE UPLOADING
      const imageRef = ref(storage, `products${newImage.name}`);
      const snapshot = await uploadBytes(imageRef, newImage);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await addDoc(productsCollectionRef, {
        name: newProductName,
        description: newDescription,
        price: newPrice,
        image: imageUrl,
      });

      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  // DIALOG LOGIC
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      modal.close(); // needed to avoid error being thrown
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleFileChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  return createPortal(
    <dialog ref={dialog} className="rounded-lg">
      <div className="py-6 px-4 mx-auto max-w-2xl lg:py-4">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Add a new product
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Name
              </label>
              <input
                onChange={(e) => setNewProductName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Price
              </label>
              <input
                onChange={(e) => setNewPrice(Number(e.target.value))}
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 py-[13px]"
                placeholder="$2999"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Image
              </label>
              <input
                onChange={handleFileChange}
                type="file"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="$2999"
                required=""
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                onChange={(e) => setNewDescription(e.target.value)}
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your description here"
                defaultValue={""}
              />
            </div>
          </div>
          <button
            onClick={onSubmitProduct}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-red rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-hover"
          >
            Add product
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default NewProductModal;
