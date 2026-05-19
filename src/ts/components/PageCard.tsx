import { Link } from "react-router-dom";
import { THEME_COLORS } from "../themecolor";

type PageCardProps = {
  title: string;
  description: string;
  link: string;
  color: string;
};

const PageCard = ({ title, description, link ,color}: PageCardProps) => {
  return (
    <div
      className="page-card-container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "16px",
      }}
    >
      <div className="page-card-header" style={{ textAlign: "center" }}>
        <h3 className="page-card" style={{ margin: 0, fontSize: "24px", color: color }}>
          {title}
        </h3>
      </div>
      <div className="page-card-content" style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
        <p
          className="page-card"
          style={{
            margin: 0,
            fontSize: "14px",
            color: THEME_COLORS.textSecondary,
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            to={link}
            className="page-card-link"
            style={{
              display: "inline-block",
              padding: "8px 16px",
              backgroundColor: color,
              color: THEME_COLORS.textPrimary,
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
          >
            詳しく見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
