// Footer.tsx
import githubLogo from '../../assets/images/logos/GitHub_Invertocat_White.svg';
import xLogo from '../../assets/images/logos/logo-X.svg';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <br/>
      <div style={linkGroupStyle}>
        <a
          href="https://x.com/shono_digic"
          target="_blank"
          rel="noreferrer"
          aria-label="X profile"
          style={iconLinkStyle}
        >
          <img src={xLogo} alt="X" style={iconStyle} />
        </a>
        <a
          href="https://github.com/shono-digic"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          style={iconLinkStyle}
        >
          <img src={githubLogo} alt="GitHub" style={iconStyle} />
        </a>
      </div>
      <hr style={{backgroundColor: "#ffffff", width: "90%"}}/>
      <p>© 2026 S.Oyama</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  background: "#111120",
  color: "#ffffff",
  textAlign: "center",
  padding: "20px",
  marginTop: "auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px"
};

const linkGroupStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px"
};

const iconLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};

const iconStyle: React.CSSProperties = {
  display: "block",
  width: "28px",
  height: "28px"
};

export default Footer;
