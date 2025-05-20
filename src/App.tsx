import "./App.css";
import Login from "./pages/auth/Login";
import CompleteProfile from "./pages/auth/completeProfile";
import EditProfile from "./pages/auth/EditProfile";
import Home from "./pages/UserDashboard/UserDashboard";
import SubjectDetail from "./pages/SubjectDetail/SubjectDetail";
import Perparation from "./pages/Perparation/Perparation";
import ChapterDetail from "./pages/ChapterDetail/ChapterDetail";
import ChapterMcq from "./pages/chapterMcq/ChapterMcq";
import MCQ from "./pages/MCQ/MCQ";
import QA from "./pages/QA/QA";
import Word from "./pages/Word/Word";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./Container/Homecontainer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<CompleteProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />

        <Route path="/" element={<HomeContainer/>} >
        <Route path="" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/subjectdetail" element={<SubjectDetail />} />
        <Route path="/perparation" element={<Perparation />} />
        <Route path="/chapterdetail" element={<ChapterDetail />} />
        <Route path="/chaptermcq" element={<ChapterMcq />} />
        <Route path="/mcq" element={<MCQ />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/word" element={<Word />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
