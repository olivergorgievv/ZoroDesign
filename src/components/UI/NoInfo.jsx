import EmptyData from "../../assets/EmptyData.svg";

// eslint-disable-next-line react/prop-types
function NoInfo({ message, onClick }) {
  return (
    <>
      <div className="py-28">
        <div className="flex items-center justify-center h-full w-full">
          <img
            src={EmptyData}
            alt="No data available"
            className="w-1/2 max-w-lg"
          />
        </div>
        <div className="mt-6 flex items-center justify-center h-full w-full">
          <h1 className="text-xl">
            {message}
            <a onClick={onClick} className="font-bold underline cursor-pointer">
              tap to add products!
            </a>
          </h1>
        </div>
      </div>
    </>
  );
}

export default NoInfo;
