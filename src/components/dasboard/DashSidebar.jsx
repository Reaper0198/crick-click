import React, { useEffect, useState } from "react";
import { BiCricketBall } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function DashSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/sign-in");
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 h-screen text-white p-6 rounded-lg shadow-md">
      <h1 className="font-semibold text-lg mb-6">Admin Panel</h1>
      <div className="flex flex-col max-h-screen">
        <ul className="flex flex-col gap-4">
          {/* Add a Match Link */}
          <li>
            <Link
              to="/dashboard?tab=matches"
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                tab === "matches"
                  ? "bg-yellow-300 text-gray-900"
                  : "hover:bg-gray-700"
              }`}
            >
              <BiCricketBall className="text-xl" />
              Add a Match
            </Link>
          </li>

          {/* Add a News Link */}
          <li>
            <Link
              to="/dashboard?tab=news"
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                tab === "news" ? "bg-yellow-300 text-gray-900" : "hover:bg-gray-700"
              }`}
            >
              <BsNewspaper className="text-xl" />
              Add a News
            </Link>
          </li>

          {/* Add a Tournament Link */}
          <li>
            <Link
              to="/dashboard?tab=tournament"
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                tab === "tournament"
                  ? "bg-yellow-300 text-gray-900"
                  : "hover:bg-gray-700"
              }`}
            >
              <GiCricketBat className="text-xl" />
              Add a Tournament
            </Link>
          </li>
        </ul>
        <div>
          <button
            className="flex underline items-center mt-[63vh] gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            onClick={handleSignOut}
          >
            <FaSignOutAlt className="text-xl" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
