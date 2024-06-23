import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import plusIcon from "../assets/plusIcon.svg";
import NewProductModal from "../components/NewProductModal";
import { useAuthentication } from "../utils/auth.js";
import { fetchProducts } from "../utils/https";
import CallToAction from "./CallToAction.jsx";
import LoginModal from "./LoginModal";
import Loader from "./UI/Loader";
import NoInfo from "./UI/NoInfo";
import Card from "./UI/card";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();

  const { user } = useAuthentication();

  const { data, isFetching } = useQuery({
    queryKey: ["Products", searchQuery],
    queryFn: ({ signal }) => fetchProducts({ signal, searchQuery }),
    enabled: true,
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = () => {
    setSearchQuery(inputValue);
  };

  // MODAL FOR ADDING PRODUCTS
  const [isLoginModal, setIsLoginModal] = useState(false);
  const handleOpenLogin = () => {
    setIsLoginModal(true);
  };

  const handleCloseLogin = () => {
    setIsLoginModal(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isFetching && <Loader />}
      {!data && !isFetching && (
        <NoInfo
          message={"There are no available products!"}
          onClick={handleOpenModal}
        />
      )}
      {isLoginModal && <LoginModal onClose={handleCloseLogin} />}
      {isModalOpen && <NewProductModal onClose={handleCloseModal} />}
      {data && (
        <>
          <section className="mt-24 flex flex-wrap py-8 antialiased bg-white md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div className="flex flex-col items-start md:flex-row md:items-end">
                <h1 className="max-w-lg mb-4 text-3xl mr-auto font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-gray-900">
                  Choose your faviourite t-shirt you want to customize!
                </h1>
                {(user && (
                  <div className="flex gap-4">
                    <form className="flex items-center gap-4">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          onChange={handleInputChange}
                          required
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 mt-4 sm:mt-0 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 px-8 py-2.5"
                          placeholder="Search by Name"
                        />
                      </div>
                      <button
                        onClick={handleSearchChange}
                        className="pt-3 align-baseline bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none flex items-center justify-center"
                      >
                        <svg
                          aria-hidden="true"
                          fill="white"
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </form>
                    <button
                      onClick={handleOpenModal}
                      href="#"
                      title=""
                      className="text-white mt-4 sm:mt-0 bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 :bg-primary-600 :hover:bg-primary-700 focus:outline-none :focus:ring-primary-800 flex items-center justify-center"
                      role="button"
                    >
                      <img src={plusIcon} />
                      Add Product
                    </button>
                  </div>
                )) || (
                  <button
                    onClick={handleOpenLogin}
                    type="button"
                    className="text-gray-600 content-center flex border border-gray-300 hover:border-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-red font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all delay-100"
                  >
                    Log in to add a product
                  </button>
                )}
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:mt-8">
                {data.map((product) => (
                  <Card
                    key={product.id}
                    id={product.id}
                    props={product}
                    loginModal={handleOpenLogin}
                  />
                ))}
              </div>
            </div>
          </section>
          {location.pathname === "/products" && <CallToAction />}
        </>
      )}
    </>
  );
}

export default Products;
