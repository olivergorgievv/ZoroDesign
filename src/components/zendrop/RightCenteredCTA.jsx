const RightCenteredCTA = () => {
  return (
    <>
      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-5 sm:py-16 lg:px-6">
          <img
            className="w-full col-span-2"
            src="https://zendrop.com/wp-content/uploads/2024/01/ZendropIPHONEs.png"
            alt="dashboard image"
          />
          <div className="flex flex-col items-center text-center mt-4 md:mt-0 col-span-3">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900">
              Zendrop Plus&apos; Is The Fastest And Easiest Way To Become A
              Consistently Profitable Dropshipper... Period - Adrian P.
            </h2>
            <p className="mb-6 font-bold text-[#FF5E16] md:text-lg uppercase">
              OVER 1,000,000 PRODUCTS FROM VERIFIED SOURCES
            </p>
            <button className="text-white bg-[#FF5E16] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mt-2 py-2.5 text-center">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightCenteredCTA;
