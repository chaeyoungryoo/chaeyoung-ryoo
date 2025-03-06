import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-area">
        <nav className="gnb-list-box">
          <ul className="gnb-lists">
            <li className="gnb-list">
              <Link className="gnb-link" to="/">
                홈
              </Link>
            </li>
            <li>
              <Link className="gnb-link" to="/about">
                소개
              </Link>
            </li>
            <li>
              <Link className="gnb-link" to="/projects">
                프로젝트
              </Link>
            </li>
            <li>
              <Link className="gnb-link" to="/contact">
                연락처
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
