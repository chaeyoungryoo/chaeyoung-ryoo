import styled from "styled-components";
import useThemeStore from "../store/useThemeStore";
import "../styles/style.scss";

// 스타일 적용된 버튼 생성
const ToggleButton = styled.button`
  background: ${(props) => (props.darkMode ? "#222" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${(props) => (props.theme.darkMode ? "#444" : "#ddd")};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  console.log("현재 테마 상태:", theme); // 테마 상태 확인

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
    </button>
  );
};

export default ThemeToggle;
