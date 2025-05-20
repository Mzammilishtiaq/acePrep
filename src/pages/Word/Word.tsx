import { Button,  LinearProgress, CircularProgress } from "@mui/material";

export default function WordPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 lg:p-8 lg:mt-10 mt-20">
          {/* Chapter Card */}
          <div className="bg-indigo-400 rounded-2xl p-6 mb-8 text-white relative flex items-center justify-between m-1 lg:m-0">
            <div>
              <div className="text-2xl font-bold">Chapter Name</div>
              <div className="text-sm mt-2">
                Chapters #: 1 <br />
                Words: 01/20
              </div>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress
                variant="determinate"
                value={5}
                size={48}
                thickness={5}
                style={{ color: "#fff" }}
              />
              <span className="text-xs mt-2">Total Preparation</span>
            </div>
          </div>

          {/* Word Card */}
          <div className="bg-white rounded-2xl border p-1 m-1 lg:p-8 mb-8">
            <div className="flex gap-2 items-center lg:gap-8 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500">
                  1
                </div>
                <span className="text-xs text-green-600 mt-2">01</span>
              </div>
              <div className="flex-1">
                <div className="lg:text-2xl text-[10px] font-semibold">Reprehenderit</div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <LinearProgress
                  variant="determinate"
                  value={5}
                  className="w-24 h-2 rounded"
                  color="success"
                />
                <span className="text-xs text-red-500 mt-2">01</span>
              </div>
            </div>
            <div className="border rounded-xl p-6 mb-6">
              <div className="italic text-gray-500 mb-2">(POS)</div>
              <div className="mb-2">
                <span className="text-gray-600">Meaning:</span>{" "}
                <span className="font-bold">Meaning of word</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-600">Sentence:</span>{" "}
                <span className="font-bold">Word is used in sentence.</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-600">Synonym</span>
              </div>
              <div>
                <span className="text-gray-600">Antonym</span>
              </div>
            </div>
            <div className="flex gap-4 justify-end">
              <Button
                variant="contained"
                color="warning"
                className="!rounded-full !px-8 
                
                !text-[10px]"
                startIcon={<span>✗</span>}
              >
                I don't know this
              </Button>
              <Button
                variant="contained"
                color="success"
                className="!rounded-full !px-8 !text-[10px]"
                startIcon={<span>✓</span>}
              >
                I know this
              </Button>
            </div>
            <div className="mt-4 text-xs text-gray-400 cursor-pointer">&lt; Back</div>
          </div>
        </main>
      </div>
    </div>
  );
}
