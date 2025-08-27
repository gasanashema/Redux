import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Change Theme Color
        </h2>
        <div className="flex space-x-2">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter a color (e.g. red, #3490dc)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => dispatch(changeColor(color))}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeColor;
