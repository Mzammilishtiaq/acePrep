import {  IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MCQ = () => {
  return (
    <div className="min-h-screen bg-[#fcf9fb]">
      {/* Main Content */}
      <div className="flex">
        {/* Main Section */}
        <div className="flex-1 p-8 mt-10">
          {/* Chapter Card */}
          <div className="bg-[#8d8cf8] rounded-xl p-6 flex justify-between items-center mb-6">
            <div>
              <div className="text-2xl font-bold text-white">Chapter Name</div>
              <div className="text-white mt-2">
                <div>Chapters #: 1</div>
                <div>
                  MCQs: <span className="text-[#e0e0ff]">02/20</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="absolute" width="48" height="48">
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="#fff"
                    strokeWidth="4"
                    fill="none"
                    opacity="0.2"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="#fff"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="138"
                    strokeDashoffset="131"
                  />
                </svg>
                <span className="text-white text-lg font-bold">5%</span>
              </div>
              <span className="text-xs text-white mt-1">Total Preparation</span>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white border rounded-xl p-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-green-600">01</span>
                  <span className="text-red-600">01</span>
                </div>
                <div className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
              </div>
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </div>
          </div>

          {/* Options Card */}
          <div className="bg-white border rounded-xl p-6">
            <div className="font-bold text-[#8d8cf8] mb-4">Options</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <input className="border rounded-lg px-4 py-2" placeholder="Option" />
                <input className="border rounded-lg px-4 py-2" placeholder="Option" />
              </div>
              <div className="flex flex-col gap-4">
                <input className="border rounded-lg px-4 py-2" placeholder="Option" />
                <input className="border rounded-lg px-4 py-2" placeholder="Option" />
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500 cursor-pointer">&lt; Back</div>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
