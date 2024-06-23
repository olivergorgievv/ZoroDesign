import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./utils/https";

// Website
import RootPage from "./pages/Root";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProducts from "./pages/SingleProducts";
import { QueryClientProvider } from "@tanstack/react-query";

// Application
import Approot from "./dashboard/pages/approot";
import AppProductsPage from "./dashboard/pages/AppProductsPage";
import Authentication from "./dashboard/pages/Authentication";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

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
      {
        path: "services",
        element: <Features />,
      },
      {
        path: "contact",
        element: <CallToAction />,
      },
    ],
  },
  {
    path: "/app",
    element: <Approot />,
    children: [
      {
        path: "products",
        element: <AppProductsPage />,
        index: true,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
