import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/cyber.css";

const HEADER_HEIGHT = 60;
const HOME_HEADER_BACKGROUND = "#11112072"; // ホームページのヘッダーバックグラウンド
const DEFAULT_HEADER_BACKGROUND = "#11112072"; // その他のページのヘッダーバックグラウンド

type HeaderProps = {
  showThemeToggle?: boolean;
  isDarkTheme?: boolean;
  onToggleTheme?: () => void;
};

const Header = ({ showThemeToggle = false, isDarkTheme = true, onToggleTheme }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const overlayStyle: React.CSSProperties = {
    top: `${HEADER_HEIGHT}px`,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    transition: "opacity 240ms ease"
  };

  const sidebarStyle: React.CSSProperties = {
    position: "fixed",
    left: 0,
    top: "0px",
    width: "200px",
    background: "#11112072",
    backdropFilter: "blur(3px)",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    transform: open ? "translateX(0)" : "translateX(-220px)",
    transition: "transform 280ms ease",
  };

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    width: "100%",
    height: `${HEADER_HEIGHT}px`,
    background: isHome ? HOME_HEADER_BACKGROUND : DEFAULT_HEADER_BACKGROUND,
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0 20px",
    zIndex: 1000
  };

  return (
    <>
      <header className="cyber-header" style={headerStyle}>
        <button
          className="cyber-menu-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          style={{
            background:"rgba(0,0,0,0)",
            color: "white",
            border: "1px solid white",
            borderRadius: "15%",
            fontSize: "200%",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
        <p className="neon-text" style={{ margin: 0, marginLeft: "20px",
          color: "white",
         }}>
          <Link to="/" onClick={closeMenu} style={{ color: "white", textDecoration: "none"}}>
          <p style={{fontSize: `${HEADER_HEIGHT * 0.7}px`, display: "inline-block", margin: 0}}>
            shono-fox
          </p><p style={{fontSize: `${HEADER_HEIGHT * 0.4}px`, display: "inline-block", margin: 0}}>
            .com
          </p>
          </Link>
        </p>
      </header>

      {/* オーバーレイ（背景クリック用） */}
      <div className="overlay" style={overlayStyle} onClick={closeMenu}>
        <nav
          className="cyber-sidebar"
          onClick={(e) => e.stopPropagation()} // サイドバー内クリックは閉じない
          style={sidebarStyle}
        >
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/profile" onClick={closeMenu}>Profile</Link>
          <Link to="/works" onClick={closeMenu}>Works</Link>
          <Link to="/models" onClick={closeMenu}>Models</Link>
          {showThemeToggle && onToggleTheme && (
            <button
              onClick={onToggleTheme}
              style={{
                marginTop: "8px",
                borderRadius: "999px",
                border: "1px solid #4f586a",
                background: isDarkTheme ? "#10141d" : "#f3f5f9",
                color: isDarkTheme ? "#e7ecf5" : "#1a1f2a",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {isDarkTheme ? "Light Theme" : "Dark Theme"}
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
