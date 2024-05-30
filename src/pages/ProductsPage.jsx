import { Outlet, useLocation } from "react-router-dom";
import Products from "../components/Products";

function ProductsPage() {
  const location = useLocation();
  const isProductDetail = location.pathname !== "/products";

  return (
    <div>
      {!isProductDetail && <Products />}
      <Outlet />
    </div>
  );
}

export default ProductsPage;
