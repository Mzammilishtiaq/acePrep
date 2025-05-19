import React from "react";
import SocialButton from "../../components/ui/socialbutton";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <span className="text-2xl font-bold text-blue-500">AcePrep</span>
        <div className="flex items-center gap-8">
          <button className="px-6 py-2 border border-blue-500 rounded-full text-blue-500 font-medium hover:bg-blue-50 transition">Download App</button>
          <span className="text-base font-semibold text-gray-700 cursor-pointer hover:text-blue-500">Features</span>
          <span className="text-base font-semibold text-gray-700 cursor-pointer hover:text-blue-500">About</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Study Smarter, Not Harder</h1>
        <div className="w-full max-w-xl flex flex-col items-center">
          <SocialButton text="Continue with Google" />
          <SocialButton text="Continue with Facebook" />
          <SocialButton text="Continue with Twitter" />
        </div>
        <div className="mt-12 text-center text-lg text-gray-700">
          <p>Ace your exams with our suite of study tools.</p>
          <p>Quizzes, notes and flash card at your fingertips.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
