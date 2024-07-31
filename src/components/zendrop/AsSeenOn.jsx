/* eslint-disable no-undef */
const AsSeenOn = () => {
  const clients = [
    {
      name: "Nosana Logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
    {
      name: "Exodus Logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
    {
      name: "Solflare Logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
    {
      name: "Google Cloud logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
    {
      name: "Phantom wallet logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
    {
      name: "coinbase wallet logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
    {
      name: "Google for startups logo svg",
      logo: "https://zendrop.com/wp-content/uploads/2024/03/trustpilot.png",
    },
  ];

  return (
    <div className="py-8 px-5 max-w-screen-xl mx-auto overflow-hidden">
      <div className="flex">
        <div className="flex animate-marquee items-center">
          {clients
            .concat(clients)
            .concat(clients)
            .map((client, index) => (
              <a
                key={index}
                href="#"
                className="mx-4 flex w-[13rem] items-center justify-center p-10 hover:brightness-125 transition-all"
              >
                <img
                  src={client.logo}
                  className="h-full w-full object-contain"
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AsSeenOn;
