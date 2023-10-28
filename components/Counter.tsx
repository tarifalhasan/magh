"use client";
import dynamic from "next/dynamic";
// Replace this with your target date
import { useEffect, useState } from "react";

const Counter = () => {
  const targetDate = new Date("2023-12-31T23:59:59");
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference < 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);
  return (
    <div className=" bg-skin-darkbrown-50  rounded-[20px] px-5 py-14">
      <div className="flex gap-7  items-center  justify-between ">
        <div>
          <h2 className="text-[2.5rem] md:text-[4rem]  text-center lg:text-[5.5rem] 2xl:text-[8rem]  font-pacifico  text-skin-darkbrown-900 leading-none">
            {timeLeft.days}
          </h2>
          <h5 className="text-skin-darkbrown-800 text-center font-poppinss font-semibold">
            Days
          </h5>
        </div>
        <div>
          <h2 className="text-[2.5rem] md:text-[4rem]  text-center lg:text-[5.5rem] 2xl:text-[8rem]  font-pacifico  text-skin-darkbrown-900 leading-none">
            {timeLeft.hours}
          </h2>
          <h5 className="text-skin-darkbrown-800 text-center font-poppinss font-semibold">
            Hours
          </h5>
        </div>
        <div>
          <h2 className="text-[2.5rem] md:text-[4rem]  text-center lg:text-[5.5rem] 2xl:text-[8rem]  font-pacifico  text-skin-darkbrown-900 leading-none">
            {timeLeft.minutes}
          </h2>
          <h5 className="text-skin-darkbrown-800 text-center font-poppinss font-semibold">
            Minutes
          </h5>
        </div>
        <div>
          <h2 className="text-[2.5rem] md:text-[4rem]  text-center lg:text-[5.5rem] 2xl:text-[8rem]  font-pacifico  text-skin-darkbrown-900 leading-none">
            {timeLeft.seconds}
          </h2>
          <h5 className="text-skin-darkbrown-800 text-center font-poppinss font-semibold">
            Seconds
          </h5>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Counter), {
  ssr: false,
});
