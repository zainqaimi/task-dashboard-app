import { VideoIcon } from "lucide-react";

const ReminderCard = () => {
  return (
    <div className="p-5 bg-white rounded-xl shadow-lg max-w-sm">
      <h1 className="text-gray-900 font-semibold mb-4">Reminders</h1>

      <div className="space-y-1 mb-5">
        <p className="text-gray-900 font-medium">Meeting with Arc Company</p>
        <p className="text-gray-500 text-sm">Time: 02.00 pm - 04.00 pm</p>
      </div>

      <button className="flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75">
        <VideoIcon className="h-5 w-5 mr-2" />
        Start Meeting
      </button>
    </div>
  );
};

export default ReminderCard;
