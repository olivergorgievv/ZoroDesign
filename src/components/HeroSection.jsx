import hero from "../assets/hero.svg";

function HeroSection() {
  return (
    <>
      <section className="bg-gray-100 pt-44 pb-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-gray-900">
              Welcome to Susoft. Your One-Stop Print-on-Demand Shop!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              At Susoft, we transform your creative ideas into high-quality,
              custom products. Whether you are an artist looking to showcase
              your work, a business aiming to expand your brand. life.
            </p>
            <form action="#" className="">
              <div className="flex items-center mb-3">
                <div className="relative w-auto mr-3">
                  <label
                    htmlFor="member_email"
                    className="hidden mb-2 text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                    className="block md:w-96 w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-red focus:border-primary-red"
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
                    defaultValue="Try for free"
                    className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-red hover:bg-primary-hover focus:ring-4 focus:ring-primary-red"
                    name="member_submit"
                    id="member_submit"
                  />
                </div>
              </div>
              <div className="text-sm text-left text-gray-500">
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
          <div className="hidden lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex">
            <img src={hero} alt="phone illustration" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
