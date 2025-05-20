import { Avatar, Button, CircularProgress, LinearProgress } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";

const subjects = [
  { name: "Biology", progress: 25, icon: "🧬" },
  { name: "Computer", progress: 25, icon: "💻" },
  { name: "Chemistry", progress: 10, icon: "⚗️" },
  { name: "Maths", progress: 0, icon: "➕" },
  { name: "Pak Studies", progress: 50, icon: "🗺️" },
  { name: "Physics", progress: 0, icon: "🔬" },
  { name: "Urdu", progress: 0, icon: "اُ" },
  { name: "Islamiat", progress: 50, icon: "📖" },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1 mt-10 lg:mt-0 xl:mt-0">
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Welcome Card */}
          <div className="bg-indigo-400 rounded-xl p-6 text-white flex items-center justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold">Hi, J Sparrow</div>
              <div className="mt-2 text-base">Class: <span className="font-bold">UKG</span></div>
              <div>Group: <span className="font-bold">B+</span></div>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress
                variant="determinate"
                value={10}
                size={60}
                thickness={6}
                sx={{ color: "white" }}
              />
              <div className="text-sm mt-2">Total Preparation</div>
            </div>
          </div>

          {/* Word of the Day */}
          <div className="bg-white border rounded-xl p-6 mb-6">
            <div className="text-indigo-400 underline text-sm mb-2 cursor-pointer">Word of the Day</div>
            <div className="text-2xl font-bold mb-1">Word</div>
            <div className="italic text-gray-500 mb-2">(POS)</div>
            <div className="mb-1"><span className="font-semibold">Meaning:</span> Meaning of word</div>
            <div><span className="font-semibold">Sentence:</span> Word is used in sentence.</div>
          </div>

          {/* Subject Overview */}
          <div className="bg-white border rounded-xl p-6">
            <div className="text-indigo-400 font-semibold text-lg mb-4">Subject Overview</div>
            <div className="grid grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <SubjectCard key={subject.name} {...subject} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Subject Card Component
function SubjectCard({ name, progress, icon }:any) {
  return (
    <div className="border rounded-xl p-4 flex flex-col items-start gap-2 min-h-[110px]">
      <div className="text-xl lg:text-3xl">{icon}</div>
      <div className="font-semibold text-[10px]">{name}</div>
      <div className="w-full">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 6,
            borderRadius: 5,
            backgroundColor: "#f3f4f6",
            "& .MuiLinearProgress-bar": { backgroundColor: "#6366f1" },
          }}
        />
        <div className="text-xs text-gray-500 mt-1">{progress}%</div>
      </div>
    </div>
  );
}
