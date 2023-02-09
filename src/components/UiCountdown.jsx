import React from "react";
import { FaBirthdayCake } from "react-icons/fa";

const UiCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="px-12 pt-36 transition-all sm:px-32 md:px-52 lg:px-72 xl:px-96">
      <header className="text-center text-3xl text-slate-300">
        <div className="mb-4 flex justify-center text-5xl">
          <FaBirthdayCake />
        </div>
        <div className="font-dancing-script text-3xl font-bold">
          Ulang Tahun
        </div>
        <div className="py-5 font-zilla text-4xl">Nadia Chelsia Zarin</div>
      </header>
      <section className="my-12 flex items-center justify-between text-slate-300">
        <div className="box-wrap">
          <div className="number-count">{days}</div>
          <div className="label-count">Hari</div>
        </div>
        <div className="devider-count">:</div>
        <div className="box-wrap">
          <div className="number-count">{hours}</div>
          <div className="label-count">Jam</div>
        </div>
        <div className="devider-count">:</div>
        <div className="box-wrap">
          <div className="number-count">{minutes}</div>
          <div className="label-count">Menit</div>
        </div>
        <div className="devider-count">:</div>
        <div className="box-wrap">
          <div className="number-count">{seconds}</div>
          <div className="label-count">Detik</div>
        </div>
      </section>
    </div>
  );
};

export default UiCountdown;
