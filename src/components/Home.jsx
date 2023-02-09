import React from "react";
import { useCountdown } from "../utils/useCountdown";
import Congratulation from "./Congratulation";
import UiCountdown from "./UiCountdown";

const Home = () => {
  // Januari: 0; Februari: 1; Maret: 2, dst.
  //   const [days, hours, minutes, seconds] = useCountdown(new Date(2023, 1, 22));
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(2023, 1, 9, 12, 57)
  );

  const isFinish = days + hours + minutes + seconds <= 0;

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-teal-600 to-violet-600">
      {!isFinish ? (
        <UiCountdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      ) : (
        <Congratulation />
      )}
    </div>
  );
};

export default Home;
