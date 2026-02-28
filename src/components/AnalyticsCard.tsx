import React from "react";

interface AnalyticsData {
  day: string;
  value: number;
  completed: boolean;
  highlight?: boolean;
  percentage?: string;
}

interface BarProps {
  day: string;
  completed: boolean;
  highlight?: boolean;
  percentage?: string;
}

const AnalyticsCard: React.FC = () => {
  const analyticsData: AnalyticsData[] = [
    { day: "S", value: 0, completed: false },
    { day: "M", value: 70, completed: true },
    {
      day: "T",
      value: 749,
      completed: true,
      percentage: "70%",
      highlight: true,
    },
    { day: "W", value: 90, completed: true },
    { day: "T", value: 0, completed: false },
    { day: "F", value: 0, completed: false },
    { day: "S", value: 0, completed: false },
  ];

  const Bar: React.FC<BarProps> = ({
    day,
    completed,
    highlight,
    percentage,
  }) => {
    let barStyle =
      "w-10 h-24 rounded-full flex flex-col justify-end items-center relative";

    if (completed) {
      barStyle += highlight ? " bg-teal-400 shadow-md" : " bg-teal-600";
    } else {
      barStyle += " bg-gray-100 border border-gray-300";
    }

    return (
      <div className="flex flex-col items-center">
        <div className={barStyle}>
          {percentage && (
            <div className="absolute -top-6 text-xs bg-white px-2 py-0.5 rounded shadow-lg border border-gray-200">
              {percentage}
            </div>
          )}
        </div>
        <span className="mt-2 text-xs font-medium text-gray-500">{day}</span>
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg w-min">
      <h2 className="text-lg font-semibold mb-6 text-gray-800">
        Project Analytics
      </h2>
      <div className="flex justify-center space-x-3">
        {analyticsData.map((data) => (
          <Bar
            key={data.day}
            day={data.day}
            completed={data.completed}
            highlight={data.highlight}
            percentage={data.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCard;
