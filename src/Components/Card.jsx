import React from "react";

const Card = (props) => {
  const {
    upvotes,
    total_upvotes,
    answers,
    author,
    time,
    question,
    description,
    tags,
  } = props.item;

  return (
    <div className="w-full flex justify-center mt-16 relative">
      <div className="relative w-[420px] sm:w-full flex flex-col items-center space-y-[100px] ">
        {/* White Card (Bottom Section)  */}

        <div className="bg-white border border-gray-200 shadow-md rounded-[20px] w-full px-6 py-4 min-h-[280px] sm:px-10 sm:py-6 mt-[20px] relative z-0">
          <div className="mt-[200px] sm:mt-[110px]">
            <p className="text-[16px] sm:text-[22px]">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 text-gray-700 text-[15px] sm:text-[18px] font-bold rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blue Card (Top Section) */}
        <div className="bg-[#4365D0] min-h-44 rounded-[20px] w-[96%] px-6 py-4 sm:px-10 sm:py-6 shadow-lg text-white absolute top-[-80px] z-10">
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex space-x-6">
              {/* Upvotes */}
              <div className="flex items-center space-x-2">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src="uparrow.png"
                  alt="Upvote"
                />
                <div className="flex flex-col leading-5">
                  <span className="font-bold text-[18px]">{upvotes}</span>
                  <span className="font-normal text-[16px]">Upvotes</span>
                </div>
                <span className="hidden sm:flex h-9 border-r ml-2 rounded-[2px] border-white"></span>
              </div>

              {/* Total Upvotes */}
              <div className="flex items-center space-x-2">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src="downarrow.png"
                  alt="Downvote"
                />
                <div className="flex flex-col leading-5">
                  <span className="font-bold text-[18px]">{total_upvotes}</span>
                  <span className="font-normal text-[16px]">Upvotes</span>
                </div>
                <span className="hidden sm:flex h-9 border-r ml-2 rounded-[2px] border-white"></span>
              </div>

              {/* Answers */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white p-2 flex justify-center items-center rounded-full text-black font-semibold">
                  A
                </div>
                <div className="flex flex-col leading-5">
                  <span className="font-bold text-[18px]">{answers}</span>
                  <span className="font-normal text-[16px]">Answers</span>
                </div>
                <span className="hidden sm:flex h-9 border-r ml-2 rounded-[2px] border-white"></span>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mt-4 sm:mt-0 mx-auto sm:mx-0">
              <div className="flex flex-col leading-5">
                <h5 className="text-[15px] sm:text-[18px] font-bold">
                  {author}
                </h5>
                <span className="font-thin text-[15px]">{time}</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white p-2 flex justify-center items-center rounded-full text-black text-[18px] font-semibold">
                {author[0]}
              </div>
            </div>
          </div>

          {/* Question */}
          <p className="text-[16px] sm:text-[22px] font-normal mt-4 text-white">
            {question}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
