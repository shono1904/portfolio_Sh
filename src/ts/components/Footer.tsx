// Footer.tsx
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <a href="https://x.com/shono_digic" target="_blank" rel="noreferrer">
        X
      </a>
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
  width: "100%"
};

export default Footer;
