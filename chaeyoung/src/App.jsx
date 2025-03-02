import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // 메인 포트폴리오 페이지
import About from "./pages/About"; // 소개 페이지
import Projects from "./pages/Projects"; // 프로젝트 리스트 페이지
import Contact from "./pages/Contact"; // 연락처 페이지
import Header from "./components/Header"; // 상단 네비게이션
import ThemeToggle from "./components/ThemeToggle"; // 다크모드 토글
import useThemeStore from "./store/useThemeStore"; // 다크모드 Zustand 관리
import "./styles/style.scss"; // SCSS 글로벌 스타일 적용
import { ThemeProvider } from "styled-components";

function App() {
  const { darkMode } = useThemeStore();

  // 테마 객체 (다크/라이트 모드 설정)
  const theme = {
    darkMode,
    background: darkMode ? "#222" : "#fff",
    textColor: darkMode ? "#fff" : "#000",
    buttonBg: darkMode ? "#444" : "#ddd",
  };

  return (
    <ThemeProvider theme={{ theme }}>
      <Router>
        <Header />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
