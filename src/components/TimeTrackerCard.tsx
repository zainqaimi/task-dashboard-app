import { useEffect, useRef, useState } from "react";

const TimeTrackerCard = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Format time to HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0",
    );
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  // Start timer
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  // Pause timer
  const handlePause = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Stop & Reset timer
  const handleStop = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSeconds(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="max-w-sm mx-auto p-6 rounded-xl shadow-lg bg-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-green-800 to-green-700 opacity-75"></div>

      <div className="relative">
        <p className="text-lg font-semibold mb-4">Time Tracker</p>

        <p className="text-5xl font-mono mb-6">{formatTime(seconds)}</p>

        <div className="flex justify-center space-x-6">
          {/* Start / Pause Button */}
          <button
            onClick={isRunning ? handlePause : handleStart}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            {isRunning ? (
              <div className="flex space-x-1">
                <div className="w-2 h-8 bg-gray-800"></div>
                <div className="w-2 h-8 bg-gray-800"></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-l-18 border-l-gray-800 border-t-12 border-t-transparent border-b-12 border-b-transparent ml-1"></div>
            )}
          </button>

          {/* Stop Button */}
          <button
            onClick={handleStop}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          >
            <div className="w-8 h-8 bg-red-600 rounded-md"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackerCard;
