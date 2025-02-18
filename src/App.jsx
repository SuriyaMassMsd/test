import React from "react";
import Navbar from "./Components/Navbar";
import Fliter from "./Components/Fliter";
import Card from "./Components/Card";
import data from "./assets/data/data";

export const App = () => {
  return (
    <div className="px-4 sm:px-[100px] py-4 ">
      <header className="">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="mt-5 font-normal text-[20px] text-[#404040] flex flex-col sm:flex-row gap-10 px-2 sm:px-4">
        <section className="flex-1">
          <p className="text-center sm:text-start">
            Dashboard / Community / Questions
          </p>
          <Fliter />
          <div className="mt-[120px]">
            {data.map((item, index) => {
              return <Card item={item} index={index} />;
            })}
          </div>
        </section>
        <aside className="mt-0 sm:mt-[70px]  ">
          <div className="h-[450px] rounded-2xl w-[350px] border border-gray-400 ">
            <h3 className="h-[60px] rounded-t-2xl px-10 py-4  bg-[#E0E8FF]">
              How our form works ?
            </h3>
            <ul className="list-disc px-10 py-2 space-y-3">
              <li className="marker:text-3xl marker:text-[#4365D0]">
                At vero eos et accusamus et iusto odio dignissimos
              </li>
              <li className="marker:text-3xl marker:text-[#4365D0]">
                Ducimus qui blanditiis praesentium voluptatum
              </li>
              <li className="marker:text-3xl marker:text-[#4365D0]">
                Deleniti atque corrupti quos dolores et quas
              </li>
              <li className="marker:text-3xl marker:text-[#4365D0]">
                Nam libero tempore, cum soluta nobis est
              </li>
            </ul>
          </div>
          <div className="min-h-[300px] rounded-2xl w-[350px] border border-gray-400 -mt-[50px]">
            <h3 className="h-[60px] rounded-t-2xl px-10 py-4  bg-[#E0E8FF]">
              Earn your reputation
            </h3>
            <p className="px-10 py-4">
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
          <div className="h-[500px] rounded-2xl w-[350px] border border-gray-400 mt-[50px]">
            <h3 className="h-[60px] rounded-t-2xl px-10 py-4  bg-[#E0E8FF]">
              Participate in challenges
            </h3>
            <img className="rounded-b-2xl" src="cardimg.png" alt="cardimg" />
          </div>
        </aside>
      </main>
    </div>
  );
};
