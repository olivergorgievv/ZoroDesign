import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Loader from "./UI/Loader";
import { useMutation } from "@tanstack/react-query";
import { updateProducts } from "../utils/https";
import { useNavigate } from "react-router-dom";

function UpdateProductModal({ onClose, props, id }) {
  const navigate = useNavigate();
  const [updateName, setUpdateName] = useState(props.name);
  const [updatePrice, setUpdatePrice] = useState(props.price);
  const [updateDescription, setUpdateDescription] = useState(props.description);
  const [updateImage, setUpdateImage] = useState(props.image);

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      updateProducts({
        id,
        updatePrice,
        updateDescription,
        updateName,
        updateImage,
      }),

    onSuccess: () => {
      navigate(`/products/${id}`);
      onClose();
    },
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    mutate();
  };

  const handleFileChange = (e) => {
    setUpdateImage(e.target.files[0]);
    console.log(updateImage);
  };

  // MODAL LOGIC
  const [imagePreview, setImagePreview] = useState(props?.image || "");
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

  return createPortal(
    <>
      <dialog ref={dialog} className="rounded-lg">
        <div className="py-6 px-4 mx-auto max-w-2xl lg:py-4">
          {isPending && <Loader />}
          {!isPending && (
            <>
              <h2 className="mb-4 text-xl font-medium text-gray-500">
                Update product{" "}
                <span className="text-gray-900 font-bold ">{props.name}</span>
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
                      onChange={(e) => setUpdateName(e.target.value)}
                      defaultValue={props.name}
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
                      onChange={(e) => setUpdatePrice(Number(e.target.value))}
                      defaultValue={props.price}
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
                    {imagePreview && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setImagePreview("");
                          }}
                          className="inline-flex items-center px-5 py-[13px] text-sm font-medium text-center text-white bg-primary-red rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-hover"
                        >
                          Clear Image
                        </button>
                        <img src={imagePreview} />
                      </>
                    )}
                    {!imagePreview && (
                      <input
                        onChange={handleFileChange}
                        type="file"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="$2999"
                        required=""
                      />
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={(e) => setUpdateDescription(e.target.value)}
                      id="description"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your description here"
                      defaultValue={props.description}
                    />
                  </div>
                </div>
                <button
                  onClick={handleUpdate}
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-red rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-hover"
                >
                  Update Product
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
}

export default UpdateProductModal;
