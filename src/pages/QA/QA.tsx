import { Button, CircularProgress } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function QA() {
  return (
    <div className="min-h-screen bg-[#fcfbfd] flex flex-col">
      <div className="flex flex-1 mt-10">
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Chapter Card */}
          <div className="bg-[#8d8cf8] rounded-xl p-6 mb-8 flex items-center justify-between text-white relative">
            <div>
              <div className="text-2xl font-bold">Chapter Name</div>
              <div className="text-sm mt-2">Chapters #: 1</div>
              <div className="text-sm">Q/A: 02/20</div>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress
                variant="determinate"
                value={5}
                size={50}
                thickness={5}
                style={{ color: "#fff" }}
              />
              <span className="text-xs mt-2">Total Preparation</span>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl border p-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#e0e0e0] flex items-center justify-center text-3xl font-bold text-[#8d8cf8]">
                  1
                </div>
                <div className="text-xs text-[#8d8cf8] mt-2">01</div>
              </div>
              <div className="flex-1">
                <div className="text-base">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-xs text-red-500">01</div>
              </div>
            </div>
          </div>

          {/* Answer Card */}
          <div className="bg-white rounded-xl border p-6 mb-6">
            <div className="font-semibold text-[#8d8cf8] mb-2">Answer</div>
            <div className="text-sm mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="flex gap-4">
              <Button
                variant="contained"
                startIcon={<CloseIcon />}
                className="!bg-[#f9b26b] !text-white !rounded-lg !px-8"
              >
                I don't know this
              </Button>
              <Button
                variant="contained"
                startIcon={<CheckIcon />}
                className="!bg-[#4caf50] !text-white !rounded-lg !px-8"
              >
                I know this
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-400 cursor-pointer">&lt; Back</div>
        </main>
      </div>
    </div>
  );
}
