import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center items-center flex flex-col">
          <h1 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">
            Not Logged In
          </h1>
          <p className="mb-4 text-xl tracking-tight font-medium text-gray-900 md:text-2xl">
            Please log in to continue to dashboard
          </p>
          <Link
            to={"/"}
            className="text-white sm:mt-0 bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 :bg-primary-600 :hover:bg-primary-700 focus:outline-none :focus:ring-primary-800 flex items-center justify-center"
          >
            Go back to Website
          </Link>
        </div>
      </div>
    </section>
  );
}
