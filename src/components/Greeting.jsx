import React from "react";

const Greeting = ({ imageSrc, memberName, text, isBoxReverse }) => {
  const boxReverseStyle = isBoxReverse ? "sm:flex-row-reverse" : "sm:flex-row";
  return (
    <div className="rounded-lg border-[2px] border-quaternary-500 p-3">
      <div
        className={`flex flex-col items-center justify-between ${boxReverseStyle}`}>
        <img
          src={imageSrc}
          alt="hero-alfarizi"
          width={110}
          className="m-3 rounded-full"
        />
        <div className="p-3 text-slate-300 first-letter:float-left first-letter:mr-2 first-letter:text-5xl">
          {text}
          <figcaption class="pt-4 font-medium">
            <div class="text-sky-400">{memberName}</div>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
