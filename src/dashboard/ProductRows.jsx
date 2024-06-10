/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function ProductRows({ props }) {
  return (
    <>
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
          <button
            id="apple-imac-27-dropdown-button"
            data-dropdown-toggle="apple-imac-27-dropdown"
            className="inline-flex items-center text-sm font-medium hover:bg-gray-100 :hover:bg-gray-700 p-1.5 :hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none :text-gray-400 :hover:text-gray-100"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <div
            id="apple-imac-27-dropdown"
            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow :bg-gray-700 :divide-gray-600"
          >
            <ul
              className="py-1 text-sm"
              aria-labelledby="apple-imac-27-dropdown-button"
            >
              <li>
                <button
                  type="button"
                  data-modal-target="updateProductModal"
                  data-modal-toggle="updateProductModal"
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white text-gray-700 :text-gray-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  Edit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-modal-target="readProductModal"
                  data-modal-toggle="readProductModal"
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white text-gray-700 :text-gray-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Preview
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ProductRows;
