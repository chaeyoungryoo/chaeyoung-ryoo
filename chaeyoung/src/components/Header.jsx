import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-area">
        <div className="header-left">
          <div className="logo-box">
            <h1 className="logo">
              <Link className="logo-link" to="/">
                Ryoo.
              </Link>
            </h1>
          </div>
        </div>
        <div className="header-middle">
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
        </div>
        <div className="header-right">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
