import { CircularProgress } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EditIcon from "@mui/icons-material/Edit";

export default function ChapterMcq() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 p-8 mt-10">
          {/* Chapter Card */}
          <div className="bg-[#9d9cf7] rounded-2xl p-6 text-white flex items-center justify-between mb-6">
            <div>
              <div className="text-2xl font-bold">Chapter Name</div>
              <div className="mt-2 text-sm">
                Chapters #: 1 <br />
                MCQs: 0/20
              </div>
              <div className="mt-1 text-sm">
                Q/A: 0/20 <br />
                Words: 0/20
              </div>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress
                variant="determinate"
                value={5}
                size={60}
                thickness={5}
                style={{ color: "#fff" }}
              />
              <span className="mt-2 text-xs">Total Preparation</span>
            </div>
          </div>

          {/* Word Card */}
          <div className="bg-white border rounded-xl p-6 mb-6">
            <a href="#" className="text-xs text-blue-700 underline">
              Word from the Chapter
            </a>
            <div className="text-2xl font-bold text-[#1a5c7a] mt-2">Word</div>
            <div className="text-xs text-[#1a5c7a] italic">(POS)</div>
            <div className="mt-2 text-sm">
              <span className="font-semibold">Meaning:</span> Meaning of word
            </div>
            <div className="text-sm">
              <span className="font-semibold">Sentence:</span> Word is used in sentence.
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white border rounded-xl p-6">
            <div className="text-[#9d9cf7] font-semibold mb-4">Overview</div>
            <div className="flex gap-6">
              <div className="flex-1 border rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow">
                <ListAltIcon className="text-4xl text-gray-500 mb-2" />
                <div className="text-lg font-medium text-gray-600">MCQs</div>
              </div>
              <div className="flex-1 border rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow">
                <QuestionAnswerIcon className="text-4xl text-gray-500 mb-2" />
                <div className="text-lg font-medium text-gray-600">Q/A</div>
              </div>
              <div className="flex-1 border rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow">
                <EditIcon className="text-4xl text-gray-500 mb-2" />
                <div className="text-lg font-medium text-gray-600">Words</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400 cursor-pointer">&lt; Back</div>
          </div>
        </main>
      </div>
    </div>
  );
}
