import { Link } from "react-router-dom";
import { worksData } from "./WorkDetail/workData";
import { THEME_COLORS } from "../themecolor";

const Works = () => {
  return (
    <>
    <title>Works - Shono.mu</title>
    <div style={{padding: "8%", maxWidth: `900px`, margin: "0 auto"}} >
      <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>ArtWorks</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　イラスト作品一覧</p>
      <hr style={{border: "none",borderTop: `3px solid ${THEME_COLORS.works}`, margin: "8px 0"}}/>
      <div style={{ display: "flex", gap: "20px" }}>
        {worksData.slice().reverse().map((work) => (
          <Link key={work.id} to={`/works/${work.id}`} className="works-link">
            <img src={work.thumbnail ?? work.image} alt={`${work.title}のサムネイル`} width={200} style={{borderRadius: "15%"}}/>
            <p style={{color : `${THEME_COLORS.textPrimary}`}}>{work.title}</p>
          </Link>
        ))}
      </div>
      <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Apps</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　開発アプリ一覧</p>
      <hr style={{border: "none",borderTop: `3px solid ${THEME_COLORS.works}`, margin: "8px 0"}}/>
      <p style={{ marginBottom: "16px" }}>鋭意制作中...</p>
    </div>
    </>
  );
};

export default Works;
