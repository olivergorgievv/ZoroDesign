/* eslint-disable react/prop-types */
import { useAuthentication } from "../../utils/auth";
import ErrorPage from "../components/ErrorPage";

const PrivateRoute = ({ element }) => {
  const { user } = useAuthentication();

  if (user === undefined) {
    return <p>Loading...</p>;
  }

  return user ? element : <ErrorPage />;
};

export default PrivateRoute;
