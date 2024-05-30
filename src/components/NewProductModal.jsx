/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

function NewProductModal({ onClose }) {
  const productsCollectionRef = collection(db, "Products");

  // HANDLE ONSUBMIT FORM
  const [newProductName, setNewProductName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newImage, setNewImage] = useState("");

  const onSubmitProduct = async (event) => {
    event.preventDefault();
    try {
      await addDoc(productsCollectionRef, {
        name: newProductName,
        description: newDescription,
        price: newPrice,
        image: newImage,
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

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      modal.close(); // needed to avoid error being thrown
    };
  }, [onClose]);

  return (
    <dialog ref={dialog}>
      <div className="rounded-lg py-6 px-4 mx-auto max-w-2xl lg:py-4">
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
                onChange={(e) => setNewImage(e.target.value)}
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
    </dialog>
  );
}

export default NewProductModal;
