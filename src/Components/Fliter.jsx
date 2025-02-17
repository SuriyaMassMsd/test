import React from "react";

const Fliter = () => {
  const filteBtn = ["Latest", "Active", "Unanswered", "Saved"];
  return (
    <div className="mt-4 sm:mt-10 space-y-5">
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-[18px] sm:text-[22px]">All Questions</h1>
        <button className="px-10 font-thin py-1 text-white bg-[#4365D0] rounded-[10px] ">
          Post Question
        </button>
      </div>
      <div className=" mt-10 sm:mt-0 flex flex-col sm:flex-row space-y-6 sm:space-y-0 justify-between items-center px-4 sm:ml-0 sm:px-0">
        <div className="space-x-4">
          {filteBtn.map((item, index) => {
            return (
              <span
                key={index}
                className="px-4 sm:px-10 py-2 text-[18px] rounded-xl border-2   border-gray-300 hover:bg-gray-300 hover:text-gray-500   hover:cursor-pointer transition-all"
              >
                {item}
              </span>
            );
          })}
        </div>

        <div>
          <button className="flex space-x-2 items-center px-2 py-2 text-[18px] rounded-xl border-2   border-gray-300 hover:bg-gray-300 hover:text-gray-500   hover:cursor-pointer transition-all">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 18q-.425 0-.712-.288T10 17t.288-.712T11 16h2q.425 0 .713.288T14 17t-.288.713T13 18zm-4-5q-.425 0-.712-.288T6 12t.288-.712T7 11h10q.425 0 .713.288T18 12t-.288.713T17 13zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                />
              </svg>
            </span>
            <span>Fliters</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fliter;
