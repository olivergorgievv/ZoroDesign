/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ props }) {
  return (
    <>
      <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm :border-gray-700 :bg-gray-800">
        <Link to={`/products/${props.id}`} className="overflow-hidden rounded">
          <img
            className="mx-auto h-44 w-44 :hidden"
            src={props.image}
            alt="imac image"
          />
          <img
            className="mx-auto hidden h-44 w-44 :block"
            src={props.image}
            alt="imac image"
          />
        </Link>
        <div>
          <Link
            to={`/products/${props.id}`}
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline :text-white"
          >
            {props.name}
          </Link>
          <p className="mt-2 text-base font-normal text-gray-500 :text-gray-400">
            {props.description}
          </p>
        </div>
        <div>
          <p className="text-lg font-bold leading-tight text-red-600 :text-red-500">
            {`$${props.price}`}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2.5">
          <button
            data-tooltip-target="favourites-tooltip-1"
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-red focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 :border-gray-600 :bg-gray-800 :text-gray-400 :hover:bg-gray-700 :hover:text-white :focus:ring-gray-700"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
              />
            </svg>
          </button>
          <div
            id="favourites-tooltip-1"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 :bg-gray-700"
          >
            Add to favourites
            <div className="tooltip-arrow" data-popper-arrow="" />
          </div>
          <Link
            to={`/products/${props.id}`}
            type="button"
            className="inline-flex gap-4 w-full items-center justify-center rounded-lg bg-primary-red px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary-red :bg-primary-red :hover:bg-primary-red :focus:ring-primary-red"
          >
            Open Product
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2196 9.28676L19.2197 9.28687C19.3515 9.42482 19.4437 9.60334 19.4813 9.80099C19.5189 9.99872 19.4994 10.2035 19.4263 10.3884L19.8912 10.5723L19.4259 10.3895C19.3778 10.5119 19.3078 10.6218 19.2209 10.7134C19.2207 10.7136 19.2204 10.7139 19.2202 10.7141L13.5064 16.6979L13.5063 16.6979L13.5005 16.7043C13.4136 16.7985 13.3109 16.8723 13.1992 16.9225C13.0875 16.9728 12.9682 16.9989 12.8483 17C12.7283 17.0011 12.6087 16.9772 12.4963 16.929C12.3839 16.8808 12.2801 16.809 12.1918 16.7165C12.1034 16.6239 12.0324 16.5126 11.9838 16.3884C11.9353 16.2642 11.9107 16.1304 11.9118 15.995C11.9129 15.8595 11.9398 15.7262 11.9903 15.603C12.0408 15.4799 12.1137 15.37 12.2035 15.2792L12.2035 15.2792L12.2095 15.2729L15.4854 11.8422L16.2926 10.9969H15.1238H1.42866C1.19001 10.9969 0.95619 10.8979 0.780063 10.7134C0.603187 10.5282 0.5 10.2722 0.5 10.0007C0.5 9.72929 0.603187 9.47333 0.780063 9.28809C0.95619 9.10364 1.19001 9.00457 1.42866 9.00457H15.1238H16.2926L15.4854 8.15927L12.2081 4.72705L12.2081 4.727L12.202 4.72082C12.1122 4.63001 12.0394 4.52012 11.9889 4.39695C11.9384 4.27375 11.9115 4.14046 11.9103 4.00503C11.9092 3.86959 11.9339 3.73577 11.9824 3.61157C12.0309 3.4874 12.102 3.37607 12.1904 3.28352C12.2787 3.19102 12.3824 3.11919 12.4949 3.071C12.6073 3.02285 12.7269 2.99894 12.8468 3.00004C12.9668 3.00113 13.086 3.02721 13.1977 3.07745C13.3095 3.12773 13.4121 3.20152 13.499 3.29574L13.499 3.29579L13.505 3.30206L19.2196 9.28676Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
