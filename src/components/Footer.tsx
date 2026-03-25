// Footer.tsx
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2026 My Portfolio</p>
      <a href="https://x.com/youraccount" target="_blank">
        X
      </a>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  background: "#555555",
  color: "#ffffff",
  textAlign: "center",
  padding: "20px",
  marginTop: "-7px"
};

export default Footer;
