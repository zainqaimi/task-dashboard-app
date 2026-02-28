import { useEffect, useState } from "react";

const ProjectProgressCard = () => {
  // 👇 yahan apna data change kar sakte ho
  const totalTasks = 20;
  const completedTasks = 8;
  const inProgressTasks = 5;
  const pendingTasks = 7;

  const [progress, setProgress] = useState(0);

  const calculatedProgress =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Smooth animation after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(calculatedProgress);
    }, 300);

    return () => clearTimeout(timer);
  }, [calculatedProgress]);

  const semiCircleLength = Math.PI * 50;
  const offset = semiCircleLength - (progress / 100) * semiCircleLength;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Project Progress
      </h2>

      <div className="relative flex justify-center items-center">
        <svg className="w-48 h-24 transform -rotate-180" viewBox="0 0 120 60">
          {/* Background */}
          <path
            d="M 10 60 A 50 50 0 0 1 110 60"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />

          {/* Progress */}
          <path
            d="M 10 60 A 50 50 0 0 1 110 60"
            fill="none"
            stroke="#10B981"
            strokeWidth="10"
            strokeDasharray={semiCircleLength}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-4">
          <p className="text-4xl font-bold text-gray-800">{progress}%</p>
          <p className="text-sm text-gray-500">
            {progress === 100 ? "Completed" : "In Progress"}
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center mt-6 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="block w-3 h-3 bg-emerald-500 rounded-full"></span>
          <span className="text-sm text-gray-600">
            Completed ({completedTasks})
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="block w-3 h-3 bg-green-700 rounded-full"></span>
          <span className="text-sm text-gray-600">
            In Progress ({inProgressTasks})
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="text-sm text-gray-600">
            Pending ({pendingTasks})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressCard;
