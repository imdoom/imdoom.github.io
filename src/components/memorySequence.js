import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const COLORS = ["bg-red-500", "bg-yellow-400", "bg-green-500", "bg-blue-500"];

const MemorySequence = () => {
  const [sequence, setSequence] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [round, setRound] = useState(0);
  const [playing, setPlaying] = useState(false); // playback in progress
  const [active, setActive] = useState(null); // currently highlighted pad
  const [message, setMessage] = useState(
    "Watch tiles jump and then repeat the sequence by clicking on them"
  );
  const [best, setBest] = useState(() => {
    try {
      const v = localStorage.getItem("memory_best");
      return v ? Number(v) : 0;
    } catch (e) {
      return 0;
    }
  });

  const timersRef = useRef([]);

  useEffect(() => {
    return () => {
      // cleanup timers on unmount
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  function clearTimers() {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }

  function getRandomPad() {
    return Math.floor(Math.random() * 4);
  }

  function startFresh() {
    clearTimers();
    const first = getRandomPad();
    setSequence([first]);
    setRound(1);
    setPlayerIndex(0);
    setMessage("Watch the sequence");
    setPlaying(true);
  }

  // play through the sequence with visual flashes
  useEffect(() => {
    if (!playing || sequence.length === 0) return;

    clearTimers();
    const speed = 600; // ms per flash (including gap)
    sequence.forEach((pad, i) => {
      const onTime = i * speed;
      const offTime = onTime + 600;
      timersRef.current.push(setTimeout(() => setActive(pad), onTime));
      timersRef.current.push(setTimeout(() => setActive(null), offTime));
    });

    // after playback, allow player to input
    const doneTime = sequence.length * speed;
    timersRef.current.push(
      setTimeout(() => {
        setPlaying(false);
        setPlayerIndex(0);
        setMessage("Repeat the sequence");
      }, doneTime)
    );

    return () => clearTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence, playing]);

  function handlePadClick(index) {
    if (playing) return; // ignore clicks during playback
    if (sequence.length === 0) return;

    // flash the pad briefly to give feedback
    setActive(index);
    timersRef.current.push(setTimeout(() => setActive(null), 200));

    if (index === sequence[playerIndex]) {
      // correct
      if (playerIndex + 1 === sequence.length) {
        // round complete
        const nextRound = round + 1;
        setRound(nextRound);
        setMessage("Good! Next round coming up");

        // update best
        if (nextRound - 1 > best) {
          setBest(nextRound - 1);
          try {
            localStorage.setItem("memory_best", String(nextRound - 1));
          } catch (e) {}
        }

        // give a short delay then add a new pad and play
        timersRef.current.push(
          setTimeout(() => {
            setSequence((s) => [...s, getRandomPad()]);
            setPlaying(true);
            setMessage("Watch the sequence");
          }, 800)
        );
      } else {
        setPlayerIndex((p) => p + 1);
      }
    } else {
      // incorrect
      setMessage("Wrong! Press Start to try again");
      setSequence([]);
      setRound(0);
      setPlayerIndex(0);
    }
  }

  function reset() {
    clearTimers();
    setSequence([]);
    setPlayerIndex(0);
    setRound(0);
    setPlaying(false);
    setActive(null);
    setMessage(
      "Watch tiles jump and then repeat the sequence by clicking on them"
    );
  }

  return (
    <>
      <div className="relative">
        <div className="absolute top-4 right-4">
          <Link to="/">
            <button className="text-sm bg-gray-200 font-semibold border-2 border-green-500 px-3 py-1 rounded">
              Back
            </button>
          </Link>
        </div>

        <p className="text-4xl pt-6">Memory Sequence</p>
        <div className="mb-6 mt-10 flex-1">
          <div className="mb-4">
            <div className="text-lg font-medium">Round: {round}</div>
            <div className="text-sm text-gray-600">Best: {best}</div>
            <div className="text-sm text-gray-600 font-semibold">{message}</div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <button
              type="button"
              onClick={startFresh}
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

          <div className="mt-8 grid grid-cols-2 gap-4 w-80 mx-auto">
            {COLORS.map((c, i) => (
              <button
                key={i}
                onClick={() => handlePadClick(i)}
                disabled={playing || sequence.length === 0}
                className={`w-36 h-36 rounded-lg flex items-center justify-center text-white text-xl font-bold
                ${c} ${active === i ? "ring-4 ring-white/60 scale-110" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemorySequence;
