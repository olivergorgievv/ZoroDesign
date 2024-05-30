import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import RootPage from "./pages/Root";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProducts from "./pages/SingleProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <ProductsPage />,
        children: [{ path: ":id", element: <SingleProducts /> }],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
