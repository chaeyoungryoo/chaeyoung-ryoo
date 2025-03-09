import styled from "styled-components";
import { useState } from "react";
import "../styles/style.scss";

// 스타일 적용된 버튼 생성
const ToggleButton = styled.button`
  background: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  color: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  console.log("현재 테마 상태:", theme);

  return (
    <div className="theme-button-box">
      <ToggleButton
        theme={theme}
        type="button"
        className="btn-theme"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
      </ToggleButton>
    </div>
  );
};

export default ThemeToggle;
