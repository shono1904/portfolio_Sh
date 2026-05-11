import { Link } from "react-router-dom";
import { THEME_COLORS } from "../themecolor";

const publish = false; // 公開フラグ（true: 公開, false: 非公開）

type ModelsProps = {
  isDarkTheme: boolean;
};

const getPageStyle = (isDarkTheme: boolean): React.CSSProperties => {
  if (!isDarkTheme) {
    return {
      padding: "8%",
      maxWidth: "900px",
      margin: "0 auto",
    };
  }

  return {
    padding: "8%",
    maxWidth: "900px",
    margin: "0 auto",
    background: "#10141d",
    color: "#e7ecf5",
    borderRadius: "16px",
    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.28)",
  };
};

const Models = ({ isDarkTheme }: ModelsProps) => {
  if(publish){
  return (
    <>
    <title>Models - Shono.mu</title>
    <div style={getPageStyle(isDarkTheme)}>
      <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Models</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　3Dモデル一覧</p>
      <hr style={{border: "none",borderTop: `3px solid ${THEME_COLORS.models}`,}}/>
      <span style={{display:"block", height:"10px"}}/>
      <p style={{ marginBottom: "16px" }}>3Dモデル一覧</p>
      <Link to="/models/kyoka">Kyoka</Link>
    </div>
    </>
  );
}

  return (
    <>
    <title>Models - Shono.mu</title>
    <div style={getPageStyle(isDarkTheme)}>
      <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Models</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　3Dモデル一覧</p>
      <hr style={{border: "none",borderTop: `3px solid ${THEME_COLORS.models}`,}}/>
      <span style={{display:"block", height:"10px"}}/>
      <p style={{ marginBottom: "16px" }}>準備中...</p>
    </div>
    </>
  );
} 

export default Models;
