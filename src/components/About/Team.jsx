import React from "react";
import Team1 from "../../assets/About/Team/Bhavesh-Soni.jpg";
import Team2 from "../../assets/About/Team/Aditya-Mehra.jpg";
import Team3 from "../../assets/About/Team/Nisar-Shaikh.jpg";
import Team4 from "../../assets/About/Team/Devyani-Chandarana.jpg";
import Team5 from "../../assets/About/Team/roshan.png";
import Team6 from "../../assets/About/Team/Shalik-Kesharwani.jpg";
import Team7 from "../../assets/About/Team/Agnivesh-Zikar.jpg";
import DummyImg from "../../assets/About/Team/dummyImg.png"

const team = [
  {
    name: "Bhavesh Soni",
    postion: "Director",
    image: DummyImg,
  },
  {
    name: "Aditya Mehra",
    postion: "Chief Creative Officer (CCO)",
    image: DummyImg,
  },
  {
    name: "Nisar Shaikh",
    postion: "Head – Events",
    image: DummyImg,
  },
  {
    name: "Devyani Chandarana",
    postion: "Business Manager – Events",
    image: DummyImg,
  },
  {
    name: "Roshan Gupta",
    postion: "Head – Digital Marketing",
    image: DummyImg,
  },
  {
    name: "Shalik Kesharwani",
    postion: "Head – Branding & Advertising",
    image: DummyImg,
  },
  {
    name: "Agnivesh Zikar",
    postion: "Asst. Head – Event Operations",
    image: DummyImg,
  },
  {
    name: "Shankar Shit",
    postion: "Project Manager",
    image: DummyImg,
  },
];

const Team = () => {
  return (
    <section className="bg-page px-26 py-10">
      {/* title */}
      <div className="text-center space-y-4">
        <p className="text-xl font-bold font-body text-accent">
          Who is behind the scenes
        </p>
        <h3 className="text-5xl font-semibold font-heading tracking-tight uppercase">
          Core Team
        </h3>
      </div>

      {/* team images */}
      <div className="grid grid-cols-4 gap-10 mt-10">
        {team.map((item, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden group rounded-md shadow-2xl  cursor-pointer "
          >
            <img
              loading="lazy"
              className="w-full h-full object-cover transition duration-400 group-hover:scale-105 "
              src={item.image}
              alt={item.name}
            />

            <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/20"></div>
            {/* text */}
            <div className="absolute bottom-4 left-4 text-white transition-all ease-in-out duration-300 group-hover:text-yellow-400   z-10 ">
              <h3 className="font-bold text-md drop-shadow-lg">{item.name}</h3>
              <p className="text-sm font-semibold  drop-shadow-lg">
                {item.postion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
