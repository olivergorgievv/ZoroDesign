const AliHero = () => {
  const clients = [
    {
      name: "Nosana Logo svg",
      logo: "https://images.weserv.nl/?url=https://ae01.alicdn.com/kf/Hc69bda655da04d08b9174e3a8382520bc/1Pc-Copper-Tibetan-Bowl-Buddha-Disciples-to-Supply-Water-Meditation-Disciples-of-the-Buddha-to-supply.jpg&w=800&h=800&fit=fill&output=webp",
    },
    {
      name: "Exodus Logo svg",
      logo: "https://images.weserv.nl/?url=https://ae01.alicdn.com/kf/H7ba8bdd7d7884814b2d58851bbf63047s/Pet-Dog-Fence-Gate-Safe-Guard-Safety-Enclosure-Dog-Fences-Dog-Gate-The-Ingenious-Mesh-Magic.jpg&w=800&h=800&fit=fill&output=webp",
    },
    {
      name: "Solflare Logo svg",
      logo: "https://images.weserv.nl/?url=https://ae01.alicdn.com/kf/S7e218057c1cf4140a3e36afe465844f67/Tabletop-Tree-Lamp-Decorative-LED-Lights-USB-Or-AA-Battery-Powered-For-Bedroom-Home-Party.jpg&w=800&h=800&fit=fill&output=webp",
    },
    {
      name: "Google Cloud logo svg",
      logo: "https://images.weserv.nl/?url=https://ae01.alicdn.com/kf/S3f846af08d3b47d7bb701de609ed4d04e/Garden-Statue-Big-Squatting-Dragon-Sculpture-Dragon-Guardian-Resin-Garden-Dragon-Statues-Outdoor-Crafts-Ornaments.jpg&w=800&h=800&fit=fill&output=webp",
    },
    {
      name: "Phantom wallet logo svg",
      logo: "https://images.weserv.nl/?url=https://m.media-amazon.com/images/I/61QNawT9a6L._AC_SL1500_.jpg&w=800&h=800&fit=fill&output=webp",
    },
    {
      name: "coinbase wallet logo svg",
      logo: "https://images.weserv.nl/?url=https://images.thdstatic.com/productImages/5c7522e6-be29-417d-bb9f-51360f61d97c/svn/sunray-saunas-saunas-hl400kc-64_1000.jpg&w=800&h=800&fit=fill&output=webp",
    },
    {
      name: "Google for startups logo svg",
      logo: "https://images.weserv.nl/?url=https://ae01.alicdn.com/kf/S970726bbfb4f43fe9b3518c5bd2aee46U/Automatic-Stirring-Cup-Mug-Rechargeable-Portable-Coffee-Electric-Stirring-Stainless-Steel-Rotating-Magnetic-Home-Drinking-Tools.jpg&w=800&h=800&fit=fill&output=webp",
    },
  ];
  return (
    <section className="bg-gray-50 pt-16">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl overflow-hidden gap-20 lg:py-16 lg:grid-cols-12 items-center">
        <div className="mr-auto mb-10 xl:col-span-6 xl:mb-0">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Start Your Journey to Dropshipping Success Now,{" "}
            <span className="text-[#FF5E16]">For Free</span>
          </h1>
          <p className="mb-6 max-w-2xl font-medium text-gray-500 lg:mb-4 text-xs md:text-base">
            *The 7-Day trial will convert to a paid subscription after the trial
            length at a 50% Off discount for 3 Months. Your account will be
            loaded with $200 in orders credits once payment is confirmed.
          </p>
          <h4 className="inline-block bg-[#FF5E16] py-1 px-6 text-white rounded-md">
            Zendrop Plus Benefits
          </h4>
        </div>
        <div className="py-8 col-span-6 px-2 max-w-screen-xl mx-auto overflow-hidden">
          <div className="h-[450px] overflow-hidden flex flex-col">
            <div className="flex">
              <div className="flex overflow-hidden flex-col animate-slowMarquee items-center">
                {clients
                  .concat(clients)
                  .concat(clients)
                  .map((client, index) => (
                    <a
                      key={index}
                      href="#"
                      className="mx-4 flex w-[17rem] items-center justify-center p-4 hover:brightness-125 transition-all"
                    >
                      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                          <img
                            className="rounded-t-lg"
                            src={client.logo}
                            alt=""
                          />
                        </a>
                        <div className="p-5">
                          <a href="#">
                            <span className="text-sm font-medium text-gray-500">
                              Home & Garden
                            </span>
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                              Noteworthy technology acquisitions
                            </h5>
                          </a>
                          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FF5E16] rounded-md"
                          >
                            View Product
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
              <div className="flex overflow-hidden flex-col animate-marquee items-center">
                {clients
                  .concat(clients)
                  .concat(clients)
                  .map((client, index) => (
                    <a
                      key={index}
                      href="#"
                      className="mx-4 flex w-[17rem] items-center justify-center p-4 hover:brightness-125 transition-all"
                    >
                      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                          <img
                            className="rounded-t-lg"
                            src={client.logo}
                            alt=""
                          />
                        </a>
                        <div className="p-5">
                          <a href="#">
                            <span className="text-sm font-medium text-gray-500">
                              Home & Garden
                            </span>
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                              Noteworthy technology acquisitions
                            </h5>
                          </a>
                          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FF5E16] rounded-md"
                          >
                            View Product
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AliHero;
