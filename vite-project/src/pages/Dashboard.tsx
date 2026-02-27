import { useAuth } from "../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 700 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 900 },
  { name: "May", users: 600 },
];

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">Donezo</h2>

        <nav className="flex flex-col gap-4 text-sm">
          <span className="bg-green-700 px-4 py-2 rounded-lg">Dashboard</span>
          <span className="hover:bg-green-700 px-4 py-2 rounded-lg cursor-pointer">
            Analytics
          </span>
          <span className="hover:bg-green-700 px-4 py-2 rounded-lg cursor-pointer">
            Users
          </span>
          <span className="hover:bg-green-700 px-4 py-2 rounded-lg cursor-pointer">
            Products
          </span>
        </nav>

        <button
          onClick={logout}
          className="mt-auto bg-red-500 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-500 text-sm">Total Users</p>
            <h2 className="text-2xl font-bold mt-2">1,245</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-2xl font-bold mt-2">320</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-500 text-sm">Revenue</p>
            <h2 className="text-2xl font-bold mt-2">$12,430</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-500 text-sm">Active Users</p>
            <h2 className="text-2xl font-bold mt-2">890</h2>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">User Analytics</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#166534"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
