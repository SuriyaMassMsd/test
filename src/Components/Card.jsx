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
    <div
      className="w-full relative mt-[50px]"
      style={{
        position: "relative",
        top: `${props.index * 440}px`,
      }}
    >
      <div className="bg-[#4365D0] h-44 rounded-[20px] w-[96%] ml-[20px] z-30 absolute top-0 px-10 py-4 ">
        <div className="flex justify-between" key={props.index}>
          <div className="flex space-x-10">
            <div className="flex text-white space-x-2">
              <img className="w-10 h-10" src="uparrow.png" alt="" />
              <div className="flex flex-col  leading-5">
                <span className="font-bold text-[18px]">{upvotes}</span>
                <span className="font-normal text-[16px]">Upvotes</span>
              </div>
              <span className="h-9 border-r ml-2 rounded-[2px] border-white"></span>
            </div>
            <div className="flex text-white space-x-2">
              <img className="w-10 h-10" src="downarrow.png" alt="" />
              <div className="flex flex-col  leading-5">
                <span className="font-bold text-[18px]">{total_upvotes}</span>
                <span className="font-normal text-[16px]">Upvotes</span>
              </div>
              <span className="h-9 border-r ml-2 rounded-[2px] border-white"></span>
            </div>
            <div className="flex text-white space-x-2">
              <div
                className="w-10 h-10 bg-white p-2 flex justify-center items-center rounded-full text-black
                 font-[12px]
                  "
              >
                A
              </div>
              <div className="flex flex-col  leading-5">
                <span className="font-bold text-[18px]">{answers}</span>
                <span className="font-normal text-[16px]">Answers</span>
              </div>
              <span className="h-9 border-r ml-2 rounded-[2px] border-white"></span>
            </div>
          </div>
          <div className="flex  space-x-4">
            <div className="text-white flex flex-col leading-5">
              <h5 className="text-[18px] font-bold">{author}</h5>
              <span className="font-thin text-[15px] ">{time}</span>
            </div>
            <div className="w-10 h-10 bg-white p-2 flex justify-center items-center rounded-full">
              {author[0]}
            </div>
          </div>
        </div>
        <p className="text-[22px] font-normal  mt-4 text-white text-wrap ">
          {question}
        </p>
      </div>
      <div className="bg-white drop-shadow-xl border border-gray-200 shadow-gray-300 min-h-80 rounded-[20px] w-full z-0 absolute mt-[40px] px-10 py-4">
        <div className="mt-[130px] space-y-6">
          <p className="text-[22px]">{description}</p>
          <div className="space-x-10 mb-[10px]">
            {tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="px-10 py-2 bg-gray-400 text-[18px] font-bold text-gray-600 rounded-[12px]"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
