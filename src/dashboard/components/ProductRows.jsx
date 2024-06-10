/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../utils/https";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import UpdateProductModal from "../../components/UpdateProductModal";
import { useState } from "react";

function ProductRows({ props }) {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id }) => deleteProduct({ id }),
    onSuccess: () => {
      navigate("/app/products");
    },
  });

  const handleDelete = () => {
    mutate({ id: props.id });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenUpdateModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <UpdateProductModal onClose={handleCloseUpdateModal} id={props.id} />
      )}
      {isPending && <Loader />}
      {!isPending && (
        <tr className="border-b :border-gray-700">
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap :text-white"
          >
            {props.name}
          </th>
          <td className="px-4 text-gray-300 py-3">/</td>
          <td className="px-4 text-gray-300 py-3">/</td>
          <td className="px-4 py-3 max-w-[12rem] truncate">
            {props.description}
          </td>
          <td className="px-4 py-3">{`$${props.price}`}</td>
          <td className="px-4 py-3 flex items-center justify-end">
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="hover:bg-gray-100 py-1 px-1 rounded-lg cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </span>
              )}
            >
              <Dropdown.Item onClick={handleOpenUpdateModal}>
                Update
              </Dropdown.Item>
              <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
              <Dropdown.Item>
                <Link to={`/products/${props.id}`}>View</Link>
              </Dropdown.Item>
            </Dropdown>

            {/* <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg> */}
          </td>
        </tr>
      )}
    </>
  );
}

export default ProductRows;
