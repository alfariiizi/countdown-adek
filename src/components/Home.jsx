import React, { useState } from "react";
import { useCountdown } from "../utils/useCountdown";
import Congratulation from "./Congratulation";
import Greeting from "./Greeting";
import UiCountdown from "./UiCountdown";
import Gallery from "./Gallery";

import ImgHeroAyah from "../assets/hero-ayah.jpg";
import ImgHeroIbuk from "../assets/hero-ibuk.jpg";
import ImgHeroAlfarizi from "../assets/hero-alfarizi.jpeg";

const Home = () => {
  const [isBtnFinishingDate, setIsBtnFinishDate] = useState(false);

  // Januari: 0; Februari: 1; Maret: 2, dst.
  // const [days, hours, minutes, seconds] = useCountdown(new Date(2023, 1, 22));
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(2023, 1, 14, 14, 17)
  );

  const isFinish = days + hours + minutes + seconds <= 0;

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-primary-600 to-tertiary-700 transition-all">
      {!isFinish && !isBtnFinishingDate ? (
        <div>
          <UiCountdown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          {/* This button only use for testing */}
          <button
            onClick={() => {
              setIsBtnFinishDate(true);
            }}
            className="rounded bg-white p-1 hover:bg-slate-200">
            Finish Date
          </button>
        </div>
      ) : (
        <div>
          <Congratulation />
          <div className="bg-primary-500 py-5 px-8 text-center font-shadow-into-ligth text-4xl text-slate-300 sm:px-16 md:px-24 lg:px-36">
            Ucapan
          </div>
          {/* All the Greeting */}
          <div className="flex flex-col justify-around gap-10 bg-primary-600 py-8 px-8 sm:px-16 md:px-24 lg:px-36">
            <Greeting
              imageSrc={ImgHeroAyah}
              memberName={"Ayah"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aperiam ducimus a. Aliquam reprehenderit consectetur earum itaque laboriosam enim atque vero, animi nesciunt quisquam soluta! Perspiciatis pariatur amet a.
            Facere nihil mollitia hic, libero accusamus unde, sit error magni voluptates nesciunt sunt iure aliquid. Minus vitae, praesentium, nihil ipsa officiis officia facilis vero quibusdam, fuga expedita esse id non."
            />
            <Greeting
              imageSrc={ImgHeroIbuk}
              isBoxReverse={true}
              memberName={"Ibuk"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aperiam ducimus a. Aliquam reprehenderit consectetur earum itaque laboriosam enim atque vero, animi nesciunt quisquam soluta! Perspiciatis pariatur amet a.
            Facere nihil mollitia hic, libero accusamus unde, sit error magni voluptates nesciunt sunt iure aliquid. Minus vitae, praesentium, nihil ipsa officiis officia facilis vero quibusdam, fuga expedita esse id non."
            />
            <Greeting
              imageSrc={ImgHeroAlfarizi}
              memberName={"Kakak"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aperiam ducimus a. Aliquam reprehenderit consectetur earum itaque laboriosam enim atque vero, animi nesciunt quisquam soluta! Perspiciatis pariatur amet a.
            Facere nihil mollitia hic, libero accusamus unde, sit error magni voluptates nesciunt sunt iure aliquid. Minus vitae, praesentium, nihil ipsa officiis officia facilis vero quibusdam, fuga expedita esse id non."
            />
          </div>
          {/* Gallery */}
          <div className="bg-primary-500 py-5 px-8 text-center font-shadow-into-ligth text-4xl text-slate-300 sm:px-16 md:px-24 lg:px-36">
            Gallery
          </div>
          <div className="flex flex-col justify-around gap-10 bg-primary-600 py-8 px-8 sm:px-16 md:px-24 lg:px-36">
            <Gallery />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
