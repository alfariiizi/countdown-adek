import React from "react";
import Confetti from "react-confetti";
import { GiPartyHat } from "react-icons/gi";

const Congratulation = () => {
  return (
    <div className="text-slate-200">
      <div className="flex h-screen w-screen flex-col items-center gap-2 pt-64">
        <Confetti />
        <div className="text-5xl">
          <GiPartyHat />
        </div>
        <div className="font-dancing-script text-3xl">Selamat Ulang Tahun</div>
        <div></div>
        <div className="-mt-5 font-inter">yang ke-16</div>
        <div className="font-zilla text-3xl">Nadia Chelsia Zarin</div>
      </div>
    </div>
  );
};

export default Congratulation;
