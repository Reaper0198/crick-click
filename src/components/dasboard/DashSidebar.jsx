import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaSignOutAlt,
  FaTicketAlt,
  FaUser,
  FaWindows,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsReverseListColumnsReverse } from "react-icons/bs";
export default function DashSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));

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
    <div className="bg-gray-900 text-white p-6 rounded-lg  mt-[4rem]   shadow-md">
      <h1 className="font-semibold text-lg mb-6">Welcome Back!</h1>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to={`/${
              user.password === "admin" ? "dashborad" : "profile"
            }?tab=profile`}
            className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
              tab === "profile"
                ? "bg-green-600 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            <FaUser className="text-xl" />
            Profile
          </Link>
        </li>
        <li>
          {user.email === "user@gmail.com" && (
            <Link
              to={`/${
                user.password === "admin" ? "dashborad" : "profile"
              }?tab=myTickets`}
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                tab === "myTickets"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              <FaWindows className="text-xl" />
              My Tickets
            </Link>
          )}
          {user.email === "team@gmail.com" && (
            <Link
              to={`/${
                user.password === "admin" ? "dashborad" : "profile"
              }?tab=editPlayers`}
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                tab === "editPlayes"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              <FaEdit className="text-xl" />
              Edit Players
            </Link>
          )}
        </li>
        <li>
          {user.email === "team@gmail.com" && (
            <Link
              to={`/${
                user.password === "admin" ? "dashborad" : "profile"
              }?tab=teamMatches`}
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                tab === "teamMatches"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              <BsReverseListColumnsReverse className="text-xl" />
              Team Matches
            </Link>
          )}
        </li>
        <li>
          <button
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            onClick={handleSignOut}
          >
            <FaSignOutAlt className="text-xl" />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}
