import styled from "styled-components";
import useThemeStore from "../store/useThemeStore";
import "../styles/style.scss";

// 스타일 적용된 버튼 생성
const ToggleButton = styled.button`
  background: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  color: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  console.log("현재 테마 상태:", theme); // 테마 상태 확인

  return (
    <ToggleButton
      theme={theme}
      type="button"
      className="btn-theme"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
    </ToggleButton>
  );
};

export default ThemeToggle;
