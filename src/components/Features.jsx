import { useLocation } from "react-router-dom";

function Features() {
  const location = useLocation();

  return (
    <section
      className={`bg-gray-100 ${
        location.pathname === "/services" ? "pt-24" : " "
      }`}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 :text-white">
            Why Choose ZonoDesign?
          </h2>
          <p className="font-light text-gray-500 :text-gray-400 sm:text-xl">
            At ZonoDesign, we transform your creative ideas into high-quality,
            custom products. Whether you are an artist looking to showcase your
            work
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20  lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">
              Endless Customization
            </h3>
            <p className="font-light text-gray-500 :text-gray-400">
              From t-shirts and hoodies to mugs and phone cases, our platform
              offers a wide range of products that can be personalized.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20  lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">
              High-Quality Prints
            </h3>
            <p className="font-light text-gray-500 :text-gray-400">
              We use state-of-the-art printing technology to ensure your designs
              are rendered in vibrant colors and sharp details.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20 lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">Eco-Friendly</h3>
            <p className="font-light text-gray-500 :text-gray-400">
              Our commitment to sustainability means we use eco-friendly inks
              and materials wherever possible, minimizing our impact on the
              planet.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20  lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">
              No Minimum Orders
            </h3>
            <p className="font-light text-gray-500 :text-gray-400">
              Whether you need one item or one hundred, we cater to orders of
              all sizes with the same dedication to quality.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-red/20 lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">
              Fast Shipping
            </h3>
            <p className="font-light text-gray-500 :text-gray-400">
              With efficient production and shipping processes, you can expect
              your custom products to arrive at your doorstep quickly.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20 lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">
              User-Friendly Interface
            </h3>
            <p className="font-light text-gray-500 :text-gray-400">
              Our intuitive design tools make it easy for you to create stunning
              products, even if you have no prior design experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20 lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">
              Enterprise Design
            </h3>
            <p className="font-light text-gray-500 :text-gray-400">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow :bg-gray-800">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded  bg-primary-red/20  lg:h-12 lg:w-12 :bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 :text-primary-300"
                fill="#F03D60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold :text-white">Operations</h3>
            <p className="font-light text-gray-500 :text-gray-400">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
