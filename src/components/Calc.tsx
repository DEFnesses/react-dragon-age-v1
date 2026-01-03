import React from "react";

const Calc = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-180 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Калькулятор</h2>
        <div className="flex flex-col items-center gap-3">
            <input></input>
          <div className="flex gap-3">
            <button className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              +/-
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              7
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              8
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              9
            </button>
            <button className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              /
            </button>
            <button className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              %
            </button>
          </div>

          <div className="flex gap-3">
            <button className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              →
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              4
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              5
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              6
            </button>
            <button className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              x
            </button>
            <button className="w-14 h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              -
            </button>
          </div>

          <div className="flex gap-3">
            <button className="w-14 h-16 bg-red-600 text-white rounded-lg font-extrabold text-3xl">
              AC
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              1
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              2
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              3
            </button>
             <button className="w-[120px] h-16 bg-gray-500 text-white rounded-lg font-extrabold text-3xl">
              +
            </button>
          </div>

          <div className="flex gap-3">
            <button className="w-14 h-16 bg-red-600 text-white rounded-lg font-extrabold text-3xl">
              C
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              0
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              00
            </button>
            <button className="w-14 h-16 bg-gray-300 text-blue-900 rounded-lg font-extrabold text-3xl">
              .
            </button>
             <button className="w-[120px] h-16 bg-blue-500 text-white rounded-lg font-extrabold text-3xl ">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
