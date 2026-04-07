import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";

const approch = [
  {
    icon: <FaRegLightbulb />,
    title: "Project Initiation",
    para: "The goal is to define the project at a macro level and tie it along with all desired deliverables.",
  },
  {
    icon: <LuBrain />,
    title: "Brain Storming",
    para: "Keeping the event purpose in mind, team gets together to brainstorm and gather their resources.",
  },
  {
    icon: <GoChecklist />,
    title: "Big Idea & Execution",
    para: "Once actionable of the event are approved its time to get on with the execution making it a success.",
  },
];

const Approach = () => {
  return (
    <section className="bg-gradient-to-br from-[#2d1b7a] via-[#3b2599] to-[#1a1040] py-10 px-16">
      {/* title */}
      <div className="text-center space-y-4">
        <p className="text-xl font-bold font-body text-accent uppercase">
          How do we Support Your Brand
        </p>
        <h3 className="text-5xl text-[#ede7f6] font-semibold font-heading tracking-tight uppercase">
          Solutions we offer
        </h3>
      </div>
      {/* full grid */}
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-10 gap-7 ">
        {/* main approch */}
        {approch.map((item, index) => (
          <div className="grid place-items-center text-center space-y-3">
            <p className="bg-accent h-25 w-25 text-6xl flex items-center justify-center rounded-full text-primary">
              {item.icon}
            </p>
            <h3 className="font-semibold text-2xl uppercase text-[#ede7f6]">
              {item.title}
            </h3>
            <p className="text-md text-[#ede7f6] ">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
