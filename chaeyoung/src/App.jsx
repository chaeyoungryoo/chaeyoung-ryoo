import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // 메인 포트폴리오 페이지
import About from "./pages/About"; // 소개 페이지
import Projects from "./pages/Projects"; // 프로젝트 리스트 페이지
import Contact from "./pages/Contact"; // 연락처 페이지
import Header from "./components/Header"; // 상단 네비게이션
import "./styles/style.scss"; // SCSS 글로벌 스타일 적용

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
