import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg";

const ClickSpeed = () => {
  const DURATION = 10; // seconds
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [count, setCount] = useState(0);
  const [best, setBest] = useState(() => {
    try {
      const raw = localStorage.getItem("clickspeed_best");
      return raw ? Number(raw) : 0;
    } catch (e) {
      return 0;
    }
  });

  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      // start countdown
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setRunning(false);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running]);

  useEffect(() => {
    // when the round ends, update best
    if (!running && timeLeft === 0) {
      if (count > best) {
        setBest(count);
        try {
          localStorage.setItem("clickspeed_best", String(count));
        } catch (e) {
          // ignore storage errors
        }
      }
    }
  }, [running, timeLeft, count, best]);

  function start() {
    setCount(0);
    setTimeLeft(DURATION);
    setRunning(true);
  }

  function reset() {
    setRunning(false);
    setTimeLeft(DURATION);
    setCount(0);
  }

  function handleClick() {
    if (!running) return;
    setCount((c) => c + 1);
  }

  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "25vh",
        }}
      >
        <div className="absolute top-4 right-4">
          <Link to="/#games">
            <button className="text-sm font-semibold bg-gray-200 border-2 border-green-500 px-3 py-1 rounded">
              Back
            </button>
          </Link>
        </div>

        <p className="text-4xl pt-6 font-semibold">Click Speed Tester</p>

        <div className="mb-6 mt-10 flex-1">
          <div className="mb-4">
            <div className="text-lg font-medium">Time left: {timeLeft}s</div>
            <div className="text-lg font-medium">Clicks: {count}</div>
            <div className="text-sm text-gray-600">Best: {best}</div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={start}
              className="ml-4 font-custom font-semibold border-2 p-1 border-blue-500 border-solid m-5"
            >
              Start
            </button>

            <button
              type="button"
              onClick={reset}
              className="text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-full px-4 py-2"
            >
              Reset
            </button>
          </div>

          <div className="mt-8">
            <button
              id="clicker"
              onClick={handleClick}
              disabled={!running}
              className={`w-64 h-64 rounded-full border-2 border-black text-2xl font-bold flex items-center justify-center mx-auto
              ${
                running
                  ? "bg-green-500 active:bg-green-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              aria-disabled={!running}
            >
              {running ? "CLICK" : "Start to play"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickSpeed;
