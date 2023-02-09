import React from "react";
import Confetti from "react-confetti";
import { GiPartyHat } from "react-icons/gi";
import HeroNadia from "../assets/hero-nadia.png";

const Congratulation = () => {
  return (
    <div className="text-slate-200">
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <Confetti />
        <div className="-mt-5 text-5xl">
          <GiPartyHat />
        </div>
        <img
          src={HeroNadia}
          alt="hero-nadia"
          width={150}
          className="rounded-full"
        />
        <div className="font-dancing-script text-3xl">Selamat Ulang Tahun</div>
        <div></div>
        <div className="-mt-5 font-inter">yang ke-16</div>
        <div className="font-zilla text-3xl">Nadia Chelsia Zarin</div>
      </div>
    </div>
  );
};

export default Congratulation;
