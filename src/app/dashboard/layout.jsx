"use client";
import Navbar from "@/components/Navbar/Navbar";
import { LogoIconDark, bellIcon, crossIcon, hamburgerIcon } from "@/ui/icons";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DashboardLayout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      console.log("Logout Successful : ", response.data.message);
      window.location.href = "/login";
    } catch (error) {
      // console.log("Logout Failed : ", error);
      toast.error(error.message);
    }
  };

  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-6 h-screen bg-background_white">
          <div
            className={`fixed z-40 h-full w-full top-0 left-0 bg-black/20 backdrop-blur-sm backdrop-filter md:hidden ${
              navbarOpen ? "block" : "hidden"
            }`}
          ></div>
          <div className="md:col-span-1 hidden md:block bg-white">
            <Navbar />
          </div>

          {/* Navbar drawer using Tailwind CSS transition */}
          <div
            className={`fixed z-50 h-screen ${
              navbarOpen ? " translate-x-0" : "-translate-x-full"
            } bg-white text-text_secondary duration-500 transition-transform box-border overflow-auto md:hidden flex flex-col w-3/4 p-6 rounded-xl`}
          >
            <nav className="h-full">
              <div className="flex flex-row items-center gap-3 text-black">
                <Link href="/">{LogoIconDark}</Link>
                Base
              </div>
              <button className="fixed right-2 top-7" onClick={toggleNavbar}>
                {crossIcon}
              </button>
              <div className="flex flex-col h-full gap-8 mt-8">
                <Link href="#" className="hover:text-backgroud_purple">
                  Dashboard
                </Link>

                <Link href="#" className="hover:text-backgroud_purple">
                  Upload
                </Link>

                <Link href="#" className="hover:text-backgroud_purple">
                  Invoice
                </Link>

                <Link href="#" className="hover:text-backgroud_purple">
                  Schedule
                </Link>

                <Link href="#" className="hover:text-backgroud_purple">
                  Calender
                </Link>

                <Link href="#" className="hover:text-backgroud_purple">
                  Notification
                </Link>

                <Link href="#" className="hover:text-backgroud_purple">
                  Settings
                </Link>
              </div>
            </nav>
          </div>

          <div className="md:col-span-5 col-span-6 w-full h-full">
            <div
              className={`flex flex-row items-center ${
                navbarOpen ? "justify-end" : "justify-between"
              } px-4 py-6 md:bg-background_white bg-white`}
            >
              {!navbarOpen && (
                <div className="md:hidden flex flex-row items-center gap-3">
                  <button onClick={toggleNavbar}>{hamburgerIcon}</button>
                  <Link href="/">{LogoIconDark}</Link>
                  Base
                </div>
              )}
              <div className="hidden md:block text-2xl font-bold">
                Upload CSV
              </div>
              <div className="flex flex-row gap-4">
                <button>{bellIcon}</button>
                <button onClick={handleLogout}>Profile</button>
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
