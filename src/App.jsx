import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import RootPage from "./pages/Root";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProducts from "./pages/SingleProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

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
