import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Constexts/AuthContext";
import { Plus, Utensils, List, ShoppingCart, User } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FeaturedFoods from "../../Componeants/FeaturedFoods";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    availableCount: 0,
    myFoodsCount: 0,
    myRequestsCount: 0,
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch user stats
  useEffect(() => {
    if (!user?.accessToken) return;

    const fetchData = async () => {
      try {
        const [available, myFoods, myRequests] = await Promise.all([
          axios.get("https://assignment-11-server-bay-psi.vercel.app/available-foods"),
          axios.get("https://assignment-11-server-bay-psi.vercel.app/my-foodsdata", {
            headers: { Authorization: `Bearer ${user.accessToken}` },
          }),
          axios.get("https://assignment-11-server-bay-psi.vercel.app/my-requests", {
            headers: { Authorization: `Bearer ${user.accessToken}` },
          }),
        ]);

        setStats({
          availableCount: available.data.length,
          myFoodsCount: myFoods.data.length,
          myRequestsCount: myRequests.data.length,
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchData();
  }, [user]);

  const cards = [
    {
      title: "Available Foods",
      count: stats.availableCount,
      icon: <Utensils className="w-10 h-10 text-green-500" />,
      bg: "bg-green-50 hover:bg-green-100",
      link: "/availableFoods",
    },
    {
      title: "My Added Foods",
      count: stats.myFoodsCount,
      icon: <List className="w-10 h-10 text-blue-500" />,
      bg: "bg-blue-50 hover:bg-blue-100",
      link: "/myfoods",
    },
    {
      title: "My Requested Foods",
      count: stats.myRequestsCount,
      icon: <ShoppingCart className="w-10 h-10 text-orange-500" />,
      bg: "bg-orange-50 hover:bg-orange-100",
      link: "/myfoddrequsted",
    },
  ];

  const chartData = [
    { name: "Available", value: stats.availableCount },
    { name: "My Foods", value: stats.myFoodsCount },
    { name: "Requested", value: stats.myRequestsCount },
  ];

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gray-100 p-5 rounded-2xl shadow">
          {/* Left: User Info */}
          <div className="flex items-center gap-4">
            <div className="bg-green-600 p-3 rounded-full">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                👋 Welcome, {user?.displayName || "User"}!
              </h1>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>

          {/* Right: Date & Time */}
          <div className="text-right">
            <p className="text-lg font-semibold text-green-600">{formattedDate}</p>
            <p className="text-sm text-gray-500">{formattedTime}</p>
          </div>
        </div>

        {/* Add Food Button */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => navigate("/addfood")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <Plus className="w-5 h-5" /> Add Food
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => navigate(card.link)}
              className={`cursor-pointer ${card.bg} text-black rounded-2xl p-8 shadow-md hover:shadow-xl 
                flex flex-col items-center justify-center text-center transition-transform hover:scale-105`}
            >
              {card.icon}
              <h2 className="text-lg font-semibold mt-3">{card.title}</h2>
              <p className="text-4xl font-bold mt-1">{card.count}</p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-white text-center">
            📊 Statistics Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4ade80" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

     
      </div>
      <div className=" ">
           {/* Featured Section */}
        <FeaturedFoods />
      </div>
    </div>
  );
};

export default UserDashboard;
