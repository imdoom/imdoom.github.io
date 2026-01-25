import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg";

const ClickSpeed = () => {
  const DURATION = 10; // seconds
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [count, setCount] = useState(0);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [best, setBest] = useState(() => {
    try {
      const raw = localStorage.getItem("clickspeed_best");
      return raw ? Number(raw) : 0;
    } catch (e) {
      return 0;
    }
  });

  const timerRef = useRef(null);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setBgLoaded(true);
    img.onerror = () => setBgLoaded(true); // Still continue even if image fails to load
    img.src = bg1;
  }, []);

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
      {!bgLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center">
            <svg
              aria-hidden="true"
              className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <p className="mt-4 text-gray-700">Loading game...</p>
          </div>
        </div>
      )}
      <div
        className={`relative transition-opacity duration-300 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
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
