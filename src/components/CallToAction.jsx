import { useLocation } from "react-router-dom";

function CallToAction() {
  const location = useLocation();

  return (
    <section
      className={`bg-gray-100 pb-8 ${
        location.pathname === "/contact" ? "pt-24" : ""
      }`}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Join Our Community
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            At ZonoDesign, we are more than just a print-on-demand service. We
            are a community of creators and innovators. Follow us on social
            media for design tips, product updates..
          </p>
          <form action="#" className="mx-auto max-w-screen-sm">
            <div className="flex items-center mb-3">
              <div className="relative mr-3 w-full">
                <label
                  htmlFor="member_email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  name="member[email]"
                  id="member_email"
                  required=""
                />
              </div>
              <div>
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-red"
                  name="member_submit"
                  id="member_submit"
                />
              </div>
            </div>
            <div className="text-sm font-medium text-left text-gray-500">
              Instant signup. No credit card required.{" "}
              <a href="#" className="text-primary-red hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-primary-red hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
