import { Outlet, useLocation } from "react-router-dom";
import Products from "../components/Products";

function ProductsPage() {
  const location = useLocation();
  const isProductDetail = location.pathname !== "/products";

  return (
    <div>
      {!isProductDetail && <Products />}
      <Outlet />
      <>
        <div className="bg-gray-100 py-6 sm:py-8 lg:py-12 ">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8">
              <div className="group relative flex h-auto items-end overflow-hidden rounded-lg bg-gray-100 md:h-auto ">
                <video controls>
                  <source
                    src="https://media.videoask.com/transcoded/516003b2-1ab2-4757-9d78-22d2f7791538/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjUxNjAwM2IyLTFhYjItNDc1Ny05ZDc4LTIyZDJmNzc5MTUzOCIsImV4cCI6MTcxODk3OTg0NH0.TfcfQ-pHbbKferznWBxMGui6elkLAsYGTi2wAG_7Zbq32UG1hUGKG3oqI8brSU4jKE0wHbcok0XRUKG1gv_nQmIosLUa9101TXDsYSF-qbdYxuDd8LowlWY4ELVbSsrL8PVnj2e9kr-HwdeKHKDa6ZRBzBjpAHIKRiy2eA3wR-ycg_4HyY0k-AaoPgI67NGoscQxzTmnyrSl_e6t55Mt8X7uBYtBp6QaHXpv_N6QCOMbBTXuy0yNEU4e9KmUtD_OWZVX_jYUPoBGS5y1AR5taVwqk5EVAa8IZneqTAyAApHVhNlj9xYRshTmCMNxtYeg95V2oYlu-phOr-dPSdXCcxAnEFHCWOo7QlXHGX-kHOvwahJqiIkEkRx05poZxf1jvLFVDqgXcYl8ihBwJI6JXZwvzgCTctbtG_l6J-eRSiy16rzIXojxYzmWD94mT1AtXo4PWiLIgxdJPdYN6lHTeyUUhcsDhjMcc6eUqhV--spOcXoKs5jYFjm7LXgwsKDaPu5MixM0Jl5ZQeyFgT8mJUve8r5H7ycbbyFTR-xIgfAKNzPfa2QUXlkeYNg0kmN9YAWyxLzePSuFyhP5BV6AZq2PBkHvsmx6DmmlSPEhMGxoJQDGigIOJz-kIKgwCyn4qeLNQh8cKcdnkqIve0gLNiDCMpB8gRdkrhHEqckYFHc"
                    type="video/mp4"
                  />
                </video>
                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" /> */}
              </div>
              <div className="group bg-white relative flex h-auto py-auto px-auto p-6 items-center overflow-hidden rounded-lg border md:col-span-1 md:h-auto">
                <div className="flex flex-col">
                  <h3 className="mb-2 text-lg font-bold md:text-4xl">
                    The Next Evolution - AI Dropshipping Tool 🚀
                  </h3>
                  <p className="mb-4 text-gray-500">
                    Dropy is the ultimate tool for dropshipping and e-commerce
                    success. Developed for future 7 figure dropshipping
                    entrepreneurs, optimized with powerful AI, Dropy is here to
                    help you win.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-white mt-4 sm:mt-0 bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-8 py-2.5 :bg-primary-600 :hover:bg-primary-700 focus:outline-none :focus:ring-primary-800 flex items-center justify-centermt-auto font-bold transition duration-100"
                    >
                      More
                    </a>
                    <a
                      href="#"
                      className="text-white mt-4 sm:mt-0 bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-8 py-2.5 focus:outline-none  flex items-center justify-centermt-auto font-bold transition duration-100 "
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3 ">
              <div className="flex flex-col rounded-lg border p-4 md:p-6 bg-white">
                <h3 className="mb-2 text-3xl font-semibold ">
                  Winning Dropship Products
                </h3>
                <p className="mb-4 text-gray-500">
                  Our Professional Dropshippers are adding the latest Winning
                  Products Weekly, based on strict criteria, to ensure you are
                  not only getting sales but also have a high profit margin.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-start gap-4 border items-center py-1 px-1 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="h"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                      fill="#00000"
                    ></path>
                  </svg>

                  <span className="text-base font-medium">
                    New Products added Daily
                  </span>
                </a>
              </div>
              <div className="flex flex-col rounded-lg border p-4 md:p-6 bg-white">
                <h3 className="mb-2 text-3xl font-semibold ">
                  Winning Dropship Products
                </h3>
                <p className="mb-4 text-gray-500">
                  Our Professional Dropshippers are adding the latest Winning
                  Products Weekly, based on strict criteria, to ensure you are
                  not only getting sales but also have a high profit margin.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-start gap-4 border items-center py-1 px-1 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="h"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                      fill="#00000"
                    ></path>
                  </svg>

                  <span className="text-base font-medium">
                    New Products added Daily
                  </span>
                </a>
              </div>
              <div className="flex flex-col rounded-lg border p-4 md:p-6 bg-white">
                <h3 className="mb-2 text-3xl font-semibold ">
                  Winning Dropship Products
                </h3>
                <p className="mb-4 text-gray-500">
                  Our Professional Dropshippers are adding the latest Winning
                  Products Weekly, based on strict criteria, to ensure you are
                  not only getting sales but also have a high profit margin.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-start gap-4 border items-center py-1 px-1 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="h"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                      fill="#00000"
                    ></path>
                  </svg>
                  <span className="text-base font-medium">
                    New Products added Daily
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProductsPage;
