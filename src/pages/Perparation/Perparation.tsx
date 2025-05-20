import { Button, CircularProgress } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function Perparation() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1 mt-20 lg:mt-10">
        {/* Main Content */}
        <main className="flex-1 lg:p-8">
          {/* Subject Card */}
          <div className="bg-indigo-400 rounded-xl p-6 text-white flex items-center justify-between mb-6 relative">
            <div>
              <div className="text-2xl font-bold">Subject Name</div>
              <div className="flex gap-8 mt-2 text-sm">
                <div>
                  Chapters: <span className="font-semibold">0/5</span>
                </div>
                <div>
                  MCQs: <span className="font-semibold">0/100</span>
                </div>
                <div>
                  Q/A: <span className="font-semibold">0/100</span>
                </div>
                <div>
                  Words: <span className="font-semibold">0/100</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress
                variant="determinate"
                value={5}
                size={50}
                thickness={5}
                style={{ color: "white", background: "#7c83f6", borderRadius: "50%" }}
              />
              <div className="absolute right-10 top-8 text-sm">5%</div>
              <div className="text-xs mt-2">Total Preparation</div>
            </div>
          </div>

          {/* Word Card */}
          <div className="border rounded-xl p-6 mb-6 bg-white">
            <a href="#" className="text-xs text-blue-700 underline">
              Word from the Subject
            </a>
            <div className="text-xl font-bold mt-2">Word</div>
            <div className="text-xs text-gray-500">(POS)</div>
            <div className="mt-2">
              <span className="font-semibold">Meaning:</span>{" "}
              <span>Meaning of word</span>
            </div>
            <div>
              <span className="font-semibold">Sentence:</span>{" "}
              <span>Word is used in sentence.</span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="border rounded-xl p-6 bg-white">
            <div className="text-lg font-semibold text-indigo-400 mb-4">Overview</div>
            <div className="grid grid-cols-2 gap-6">
              <Button
                variant="outlined"
                className="!w-full !h-28 !rounded-xl !flex !flex-col !items-center !justify-center !gap-2"
                startIcon={<ListAltIcon fontSize="large" />}
              >
                Chapter Wise
              </Button>
              <Button
                variant="outlined"
                className="!w-full !h-28 !rounded-xl !flex !flex-col !items-center !justify-center !gap-2"
                startIcon={<QuizIcon fontSize="large" />}
              >
                All MCQs
              </Button>
              <Button
                variant="outlined"
                className="!w-full !h-28 !rounded-xl !flex !flex-col !items-center !justify-center !gap-2"
                startIcon={<QuizIcon fontSize="large" />}
              >
                All Q/As
              </Button>
              <Button
                variant="outlined"
                className="!w-full !h-28 !rounded-xl !flex !flex-col !items-center !justify-center !gap-2"
                startIcon={<MenuBookIcon fontSize="large" />}
              >
                All Words
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
