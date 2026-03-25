import { useState } from "react";
import { Link } from "react-router-dom";
import "./cyber.css";

const HEADER_HEIGHT = 60;

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
    top: "2px",
    width: "200px",
    background: "#474646b1",
    backdropFilter: "blur(3px)",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    transform: open ? "translateX(0)" : "translateX(-220px)",
    transition: "transform 280ms ease",
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
            cursor: "pointer"
          }}
        >
          ☰
        </button>
        <h1 className="neon-text" style={{ margin: 0, marginLeft: "20px",
          color: "white",
         }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Shono.mu</Link>
        </h1>
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
        </nav>
      </div>
    </>
  );
};


const headerStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: `${HEADER_HEIGHT}px`,
  background: "rgba(255, 255, 255, 0)", // 半透明
  backdropFilter: "blur(3px)",       // 背景ぼかし
  WebkitBackdropFilter: "blur(10px)", // Safari対応
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "0 20px",
  zIndex: 1000
};

export default Header;
