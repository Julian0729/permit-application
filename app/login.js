import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/seal.png" // Replace with actual seal image path
            alt="Naga City Seal"
            className="h-12 w-12"
          />
          <div>
            <p className="text-xs uppercase">Republic of the Philippines</p>
            <p className="font-bold uppercase text-sm">
              City Government of Naga
            </p>
          </div>
        </div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-6 gap-12">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img
              src="/bopems.png" // Replace with actual BOPeMS logo path
              alt="BOPeMS Logo"
              className="h-20"
            />
            <div>
              <h1 className="text-2xl font-bold">BOPEMS</h1>
              <p className="text-sm">
                Building & Occupancy Permit Management System
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Login to your Account
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="username"
              className="w-full p-2 border rounded focus:outline-none"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full p-2 border rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
