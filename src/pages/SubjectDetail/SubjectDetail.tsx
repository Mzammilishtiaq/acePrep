import { CircularProgress, Paper } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";
import MemoryIcon from "@mui/icons-material/Memory";

export default function SubjectDetail() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 p-0 lg:p-8 mt-16 lg:mt-10">
          {/* Subject Card */}
          <Paper elevation={3} className="p-6 rounded-2xl bg-indigo-400 text-white mb-6 relative">
            <div className="text-2xl font-bold">Subject Name</div>
            <div className="flex gap-8 mt-2">
              <div>
                <div>Chapters: <span className="font-bold">0/5</span></div>
                <div>MCQs: <span className="font-bold">0/100</span></div>
              </div>
              <div>
                <div>Q/A: <span className="font-bold">0/100</span></div>
                <div>Words: <span className="font-bold">0/100</span></div>
              </div>
            </div>
            <div className="absolute top-6 right-8 flex flex-col items-center">
              <CircularProgress
                variant="determinate"
                value={5}
                size={48}
                thickness={5}
                sx={{ color: "white" }}
              />
              <div className="absolute top-3 left-3 text-lg font-bold text-indigo-700">5%</div>
              <div className="text-xs mt-1">Total Preparation</div>
            </div>
          </Paper>

          {/* Word Card */}
          <Paper className="p-6 mb-6 border border-indigo-300 rounded-xl">
            <div className="text-xs text-indigo-500 mb-2 underline cursor-pointer">
              Word From the Subject
            </div>
            <div className="text-2xl font-bold text-gray-800">Word</div>
            <div className="italic text-gray-500 text-sm mb-2">(POS)</div>
            <div className="mb-1">
              <span className="font-semibold">Meaning:</span> <span className="font-bold">Meaning of word</span>
            </div>
            <div>
              <span className="font-semibold">Sentence:</span> <span className="font-bold">Word is used in sentence.</span>
            </div>
          </Paper>

          {/* Overview Section */}
          <Paper className="p-6 border border-indigo-300 rounded-xl">
            <div className="text-indigo-500 font-semibold mb-4">Overview</div>
            <div className="flex gap-6">
              <Paper className="flex-1 flex flex-col items-center justify-center p-6 border border-indigo-200 rounded-lg cursor-pointer hover:shadow-md transition">
                <MenuBookIcon className="mb-2 text-indigo-400 !text-2xl" />
                <div className="font-semibold text-gray-700 text-[10px]">By Book</div>
              </Paper>
              <Paper className="flex-1 flex flex-col items-center justify-center p-6 border border-indigo-200 rounded-lg cursor-pointer hover:shadow-md transition">
                <DescriptionIcon  className="mb-2 text-indigo-400 !text-2xl" />
                <div className="font-semibold text-gray-700 text-[10px]">Past Papers</div>
              </Paper>
              <Paper className="flex-1 flex flex-col items-center justify-center p-6 border border-indigo-200 rounded-lg cursor-pointer hover:shadow-md transition">
                <MemoryIcon  className="mb-2 text-indigo-400 !text-2xl" />
                <div className="font-semibold text-gray-700 text-[10px]">AI Based Paper</div>
              </Paper>
            </div>
            <div className="mt-4 text-xs text-gray-400 cursor-pointer">&lt; Back</div>
          </Paper>
        </main>
      </div>
    </div>
  );
}
