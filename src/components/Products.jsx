import Card from "./UI/card";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import NewProductModal from "../components/NewProductModal";
import plusIcon from "../assets/plusIcon.svg";
import NoInfo from "./UI/NoInfo";
import Loader from "./UI/Loader";

function Products() {
  // NO DATA AVAILABLE STATE
  const [gotInfo, setGotInfo] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  // MODAL FOR ADDING PRODUCTS
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  //

  // FETCHING PRODUCTS
  const [productList, setProductList] = useState([]);
  const productsCollectionRef = collection(db, "Products");

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        setIsLoading(true);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(filteredData);
        console.log(filteredData);
        setGotInfo(filteredData.length > 0);
      } catch (err) {
        console.error(err);
      }
    };
    setIsLoading(false);
    getProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!IsLoading && <Loader />}
      {IsLoading && !gotInfo && (
        <NoInfo
          message={"There are no available products!"}
          onClick={handleOpenModal}
        />
      )}
      {isModalOpen && <NewProductModal onClose={handleCloseModal} />}
      {gotInfo && (
        <>
          {" "}
          <section className="mt-24 flex flex-wrap py-8 antialiased bg-white md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div className="flex justify-end gap-3 items-end">
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
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:mt-8">
                {productList.map((product) => (
                  <Card key={product.id} id={product.id} props={product} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Products;
