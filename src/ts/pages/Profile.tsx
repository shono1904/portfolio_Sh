//import { useNavigate } from "react-router-dom";
import PlofileImg from "./../../assets/images/plofile/plofile.webp";
import githubLogo from "../../assets/images/logos/GitHub_Invertocat_Black.svg";
import xLogo from "../../assets/images/logos/logo-X.svg";
import { THEME_COLORS } from "../themecolor";
import React from "react";

type ProfileProps = {
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

const timeline: React.CSSProperties = {
  textAlign: "left",
};

const timelineliststyle: React.CSSProperties = {
  listStyle: "none",
  padding: "0 0 0 20px", // 縦線の分だけ左に余白
  margin: "0",
  position: "relative",
};

const getTimelineLineStyle = (isDarkTheme: boolean): React.CSSProperties => {
  return {
    position: "absolute",
    left: "8px",
    top: "2px",
    bottom: "2px",
    width: "2px",
    background: isDarkTheme ? "rgba(231, 236, 245, 0.28)" : "rgba(0, 0, 0, 0.12)",
  };
};

const getDateTimeStyle = (isDarkTheme: boolean): React.CSSProperties => {
  return {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "700",
    color: isDarkTheme ? "rgba(231, 236, 245, 0.8)" : "rgba(0, 0, 0, 0.7)",
    margin: "0 0 6px",
  };
};

const timelinetitlestyle: React.CSSProperties = {
  fontSize: "14px",
  margin: "0 0 6px",
};

const timelineitemstyle: React.CSSProperties = {
  position: "relative",
  padding: "0 0 16px 0",
};

const getTimelineDotStyle = (isDarkTheme: boolean): React.CSSProperties => {
  return {
    position: "absolute",
    left: "-16px",
    top: "6px",
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    background: THEME_COLORS.profile,
    outline: isDarkTheme ? "1px solid rgba(231, 236, 245, 0.8)" : `1px solid ${THEME_COLORS.textPrimary}`,
  };
};

const timelinetextstyle: React.CSSProperties = {
  fontSize: "13px",
  margin: "0",
  opacity: "0.9",
};

const socialLinksStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  margin: "8px 0 0",
};

const getSocialLinkStyle = (isDarkTheme: boolean): React.CSSProperties => {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: isDarkTheme ? "#f2f4f8" : "transparent",
    borderRadius: "10%",
    width: "36px",
    height: "36px",
  };
};

const socialIconStyle: React.CSSProperties = {
  display: "block",
  width: "28px",
  height: "28px",
};

const xIconStyle: React.CSSProperties = {
  ...socialIconStyle,
  filter: "brightness(0)",
};

const Profile = ({ isDarkTheme }: ProfileProps) => {
  //const navigate = useNavigate();

  return (
    <>
    <title>Profile - Shono-fox.com</title>
    <div className="page-container" style={getPageStyle(isDarkTheme)}>
      <p className="page-title" style={{fontSize:"36px", display: "inline-block", margin: 0}}>Profile</p><p className="page-subtitle" style={{fontSize:"12px", display: "inline-block", margin: 0}}>　プロフィール</p>
      <hr style={hrstyle}/>
      <span style={{display:"block", height:"30px"}}/>
      <div className="profile-section" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <img className="profile-image" src={PlofileImg} alt="プロフィール画像" style={{width: "20%", height: "auto", borderRadius: "15%", flexShrink: 0}} />
        <div className="profile-info">
          <h2 style={{ margin: 0 }}>しょうの</h2>
          <div className="social-links" style={socialLinksStyle}>
            <a
              href="https://x.com/shono_digic"
              target="_blank"
              rel="noreferrer"
              aria-label="X profile"
              className="social-link"
              style={getSocialLinkStyle(isDarkTheme)}
            >
              <img className="social-icon" src={xLogo} alt="X" style={xIconStyle} />
            </a>
            <a
              href="https://github.com/shono1904"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="social-link"
              style={getSocialLinkStyle(isDarkTheme)}
            >
              <img className="social-icon" src={githubLogo} alt="GitHub" style={socialIconStyle} />
            </a>
          </div>
          <p>
            趣味で3Dモデリングを行う創作人間<br/>
            <br/>
            芝浦工業大学の創作サークル<a href="https://digicre.net/welcome" style={{textDecoration: "none", color: isDarkTheme ? THEME_COLORS.models : THEME_COLORS.textPrimary}}>デジクリ</a>所属<br/><br/>
            2023年からBlenderでケモ耳娘の3Dモデル作成を開始。写真を背景に使用し、3Dモデルをイラスト風のシェーダーでメインに配置する一次創作イラストの作成も行なっている
          </p>
        </div>
      </div>
      <br/>
      <div style={{display: "flex", gap: "40px",}}>
      <div style={{flex:1, outline: isDarkTheme ? "1px solid rgba(231, 236, 245, 0.35)" : "2px solid Gray", padding: "0 10px", borderRadius: "16px",}}>
        <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Career</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　これまで</p>
        <div style={timeline}>
          <ul className="timeline-list" style={timelineliststyle}>
            <div className="timeline-line" style={getTimelineLineStyle(isDarkTheme)} />
            <li className="timeline-item" style={timelineitemstyle}>
              <span className="timeline-dot" style={getTimelineDotStyle(isDarkTheme)} />
              <time className="timeline-date" dateTime="2021-2023" style={getDateTimeStyle(isDarkTheme)}>2021-2023</time>
              <p className="timeline-title" style={timelinetitlestyle}>新潟県立新潟高等学校普通科</p>
              <ul className="timeline-text" style={timelinetextstyle}>
                <li>エッチなゲームの背景にたまに使われている学校</li>
              </ul>
            </li>
            <li className="timeline-item" style={timelineitemstyle}>
              <span className="timeline-dot" style={getTimelineDotStyle(isDarkTheme)} />
              <time className="timeline-date" dateTime="2023-現在" style={getDateTimeStyle(isDarkTheme)}>2023-現在</time>
              <p className="timeline-title" style={timelinetitlestyle}>芝浦工業大学システム理工学部電子情報システム学科</p>
              <ul className="timeline-text" style={timelinetextstyle}>
                <li>パソコンを触り始める</li>
                <li>デジクリに入部</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div style={{flex:1 ,outline: isDarkTheme ? "1px solid rgba(231, 236, 245, 0.35)" : "2px solid Gray", padding: "0 10px", borderRadius: "16px",}}>
        <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Tools and so on</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　ツールとか</p>
        <div style={{ marginTop: "20px", display: "grid", gap: "12px" }}>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "1.2rem", fontWeight: 600 }}>
                Software
              </summary>
              <ul style={{ marginTop: "8px" }}>
                <li>Blender</li>
                <li>Clip Studio Paint</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Substance painter</li>
              </ul>
            </details>
            <span style={{display:"block", height:"10%"}}/>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "1.2rem", fontWeight: 600 }}>
                Hardware
              </summary>
              <div style={{ marginTop: "8px" }}>
                <p style={{ margin: "0 0 6px 0" ,fontSize:"1.1rem",fontWeight : 600}}>Desktop</p>
                <p style={{ margin: "0 0 10px 0" }}>
                  Windows 11 Pro<br/>
                  <ul>
                    <li> CPU: Core i9 12900k</li>
                    <li> GPU: Geforce RTX 4080super</li>
                    <li> RAM: DDR4 32GB</li>
                    <li> Pen Tablet: Huion Kamvas 13</li>
                  </ul>
                </p>
                <p style={{ margin: "0 0 6px 0" ,fontSize:"1.1rem",fontWeight : 600}}>Portable</p>
                <p style={{ margin: 0 }}>
                  M4 MacBook Air<br/>
                  <ul>
                    <li> RAM:32GB</li>
                    <li> Storage:512GB</li>
                  </ul>
                </p>
              </div>
            </details>
            <span style={{display:"block", height:"10%"}}/>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "1.2rem", fontWeight: 600 }}>
                取得済み資格
              </summary>
              <ul style={{ marginTop: "8px" }}>
                <li> ・画像処理エンジニア検定エキスパート</li>
                <li> ・CGエンジニア検定ベーシック</li>
              </ul>
            </details>
            <span style={{display:"block", height:"10%"}}/>
          </div>
      </div>
      
    </div>
    <br/>
    <hr style={hrstyle}/>
      <div>
        ひとこと
        <ul>
          <li>なんでこのサイトをReactで実装したのか、今となっては甚だ疑問</li>
        </ul>
      </div>
    </div>
    </>
  )
}

const hrstyle: React.CSSProperties = {
  border: "none",
  borderTop: `3px solid ${THEME_COLORS.profile}`,
}

export default Profile;
