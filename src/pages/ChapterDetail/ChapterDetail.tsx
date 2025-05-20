const chapters = [
  "Chapter 1 Name",
  "Chapter 2 Name",
  "Chapter 3 Name",
  "Chapter 4 Name",
  "Chapter 5 Name",
];

export default function Overview() {
  return (
    <div className="border rounded-xl p-4 bg-white mt-20 mx-8">
      <div className="text-indigo-400 font-semibold mb-4">Overview</div>
      <div className="grid grid-cols-3 gap-4">
        {chapters.map((name, idx) => (
          <div
            key={idx}
            className="border rounded-xl flex items-center justify-center px-6 py-6 text-lg lg:text-2xl text-gray-500 font-medium text-[10px]"
          >
            {/* <span className="text-[10px] lg:text-2xl font-bold text-gray-400 mr-4">
              {idx + 1}
            </span> */}
            {name}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-400 mt-4">&lt; Back</div>
    </div>
  );
}
