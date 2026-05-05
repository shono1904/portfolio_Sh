import ImageSlider from "../components/ImageSlider";
import PageCard from "../components/PageCard";
import { THEME_COLORS } from "./themecolor";

const Home = () => {
  return (
    <>
    <title>Shono.mu</title>
    <div style={{}}>
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <ImageSlider />
        <div
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
            style={{
              flex: "1 1 220px",
              maxWidth: "360px",
              padding: "24px",
              borderRadius: "16px",
              background: THEME_COLORS.cardBg,
              backdropFilter: "blur(6px)",
              boxShadow: `0 8px 24px ${THEME_COLORS.shadowDark}`,
              outline: `1px solid ${THEME_COLORS.profile}`,
            }}
          >
            <PageCard
              title="Profile"
              description="しょうののプロフィール、経歴、その他情報を見てみる"
              link="/profile"
              color={THEME_COLORS.profile}
            />
          </div>
          <div
            style={{
              flex: "1 1 220px",
              maxWidth: "360px",
              padding: "24px",
              borderRadius: "16px",
              background: THEME_COLORS.cardBg,
              backdropFilter: "blur(6px)",
              boxShadow: `0 8px 24px ${THEME_COLORS.shadowDark}`,
              outline: `1px solid ${THEME_COLORS.works}`,
            }}
          >
            <PageCard
              title="Works"
              description="これまでに制作した作品やプロジェクトについて見てみる"
              link="/works"
              color={THEME_COLORS.works}
            />
          </div>
          <div
            style={{
              flex: "1 1 220px",
              maxWidth: "360px",
              padding: "24px",
              borderRadius: "16px",
              background: THEME_COLORS.cardBg,
              backdropFilter: "blur(6px)",
              boxShadow: `0 8px 24px ${THEME_COLORS.shadowDark}`,
              outline: `1px solid ${THEME_COLORS.models}`,
            }}
          >
            <PageCard
              title="Models"
              description="これまでに制作された3Dモデルを見てみる"
              link="/models"
              color={THEME_COLORS.models}
            />
          </div>
        </div>
        <h1
          style={{
            position: "absolute",
            top: `${window.innerHeight * (1/3)}px`,
            left: `${window.innerWidth * (1/6)}px`,
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
