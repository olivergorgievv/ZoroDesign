import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./utils/https";

// Pages
import RootPage from "./pages/Root";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProducts from "./pages/SingleProducts";
import { QueryClientProvider } from "@tanstack/react-query";

// Application
import Approot from "./dashboard/approot";

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
  {
    path: "/app",
    element: <Approot />,
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
