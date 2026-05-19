import ImageSlider from "../components/ImageSlider";
import PageCard from "../components/PageCard";
import { THEME_COLORS } from "../themecolor";

const Home = () => {
  return (
    <>
    <title>Shono-fox.com</title>
    <div style={{}}>
      <div className="home-container" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <ImageSlider />
        <div
          className="home-card-container"
          style={{
            position: "absolute",
            top: window.innerHeight * (2/3)-10,
            left: 0,
            right: 0,
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            padding: "0 6%",
            flexWrap: "wrap",
            height: window.innerHeight * (1/3),
          }}
        >
          <div
            className="home-card"
            style={{
              flex: "1 1 220px",
              maxWidth: "360px",
              padding: "24px",
              borderRadius: "16px",
              background: THEME_COLORS.cardBg,
              backdropFilter: "blur(4px)",
              boxShadow: `0 8px 24px ${THEME_COLORS.shadowDark}`,
              outline: `1px solid ${THEME_COLORS.profile}`,
            }}
          >
            <PageCard
              title="Profile"
              description="しょうののプロフィール、経歴、その他情報"
              link="/profile"
              color={THEME_COLORS.profile}
            />
          </div>
          <div
            className="home-card"
            style={{
              flex: "1 1 220px",
              maxWidth: "360px",
              padding: "24px",
              borderRadius: "16px",
              background: THEME_COLORS.cardBg,
              backdropFilter: "blur(4px)",
              boxShadow: `0 8px 24px ${THEME_COLORS.shadowDark}`,
              outline: `1px solid ${THEME_COLORS.works}`,
            }}
          >
            <PageCard
              title="Works"
              description="これまでに制作した作品やプロジェクト"
              link="/works"
              color={THEME_COLORS.works}
            />
          </div>
          <div
            className="home-card"
            style={{
              flex: "1 1 220px",
              maxWidth: "360px",
              padding: "24px",
              borderRadius: "16px",
              background: THEME_COLORS.cardBg,
              backdropFilter: "blur(4px)",
              boxShadow: `0 8px 24px ${THEME_COLORS.shadowDark}`,
              outline: `1px solid ${THEME_COLORS.models}`,
            }}
          >
            <PageCard
              title="Models"
              description="これまでに制作された3Dモデル"
              link="/models"
              color={THEME_COLORS.models}
            />
          </div>
        </div>
        <h1
          className="home-title"
          style={{
            fontSize: "48px",
            position: "absolute",
            top: `${window.innerHeight * (1/3)}px`,
            left: `${window.innerWidth * (1/5)}px`,
            color: "white",
            transform: "translateX(-50%)",
            zIndex: 2,
            margin: 0,
            pointerEvents: "none",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: `${THEME_COLORS.textPrimary}`,
          }}
        >
          Shono's Works
        </h1>
      </div>
    </div>
    </>
  );
};

export default Home;
