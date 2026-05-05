import { useNavigate } from "react-router-dom";
import PlofileImg from "./profile.webp";
import { THEME_COLORS } from "./themecolor";
import React from "react";

const timeline: React.CSSProperties = {
  textAlign: "left",
};

const timelineliststyle: React.CSSProperties = {
  listStyle: "none",
  padding: "0 0 0 20px", // 縦線の分だけ左に余白
  margin: "0",
  position: "relative",
};

const timelineLineStyle: React.CSSProperties = {
  position: "absolute",
  left: "8px",
  top: "2px",
  bottom: "2px",
  width: "2px",
  background: "rgba(0, 0, 0, 0.12)",
};

const datetimestyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "12px",
  fontWeight: "700",
  color: "rgba(0, 0, 0, 0.7)",
  margin: "0 0 6px",
};

const timelinetitlestyle: React.CSSProperties = {
  fontSize: "14px",
  margin: "0 0 6px",
};

const timelineitemstyle: React.CSSProperties = {
  position: "relative",
  padding: "0 0 16px 0",
};

const timelineDotStyle: React.CSSProperties = {
  position: "absolute",
  left: "-16px",
  top: "6px",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  background: THEME_COLORS.profile,
  outline: `1px solid ${THEME_COLORS.textPrimary}`,
};

const timelinetextstyle: React.CSSProperties = {
  fontSize: "13px",
  margin: "0",
  opacity: "0.9",
};

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
    <title>Profile - Shono.mu</title>
    <div style={{padding: "8%", maxWidth: `900px`, margin: "0 auto"}}>
      <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Profile</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　プロフィール</p>
      <hr style={hrstyle}/>
      <span style={{display:"block", height:"30px"}}/>
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <img src={PlofileImg} alt="プロフィール画像" style={{width: "20%", height: "auto", borderRadius: "15%", flexShrink: 0}} />
        <div>
          <h2 style={{ margin: 0 }}>しょうの</h2>
          <p>
            趣味で3Dモデリングを行う創作人間<br/>
            <br/>
            芝浦工業大学の創作サークル<a href="https://digicre.net/welcome" style={{textDecoration: "none",color: THEME_COLORS.textPrimary}}>デジクリ</a>所属<br/><br/>
            2023年からBlenderでケモ耳娘の3Dモデル作成を開始。写真を背景に使用し、3Dモデルをイラスト風のシェーダーでメインに配置する一次創作イラストの作成も行なっている
          </p>
        </div>
      </div>
      <br/>
      <div style={{display: "flex", gap: "40px",}}>
      <div style={{flex:1,outline: `2px solid Gray`, padding: "0 10px", borderRadius: "16px",}}>
        <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>Career</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　これまで</p>
        <div style={timeline}>
          <ul style={timelineliststyle}>
            <div style={timelineLineStyle} />
            <li style={timelineitemstyle}>
              <span style={timelineDotStyle} />
              <time dateTime="2021-2023" style={datetimestyle}>2021-2023</time>
              <p style={timelinetitlestyle}>新潟県立新潟高等学校普通科</p>
              <ul style={timelinetextstyle}>
                <li>エッチなゲームの背景にたまに使われている学校</li>
              </ul>
            </li>
            <li style={timelineitemstyle}>
              <span style={timelineDotStyle} />
              <time dateTime="2023-現在" style={datetimestyle}>2023-現在</time>
              <p style={timelinetitlestyle}>芝浦工業大学システム理工学部電子情報システム学科</p>
              <ul style={timelinetextstyle}>
                <li>パソコンを触り始める</li>
                <li>デジクリに入部</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div style={{flex:1 ,outline: `2px solid Gray`, padding: "0 10px", borderRadius: "16px",}}>
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
        最近のマイブーム
        <ul>
          <li>Normal mapを作成してより立体感のある陰影を表現する</li>
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => navigate("/works")}
              style={{
                color: THEME_COLORS.textPrimary,
                borderRadius: "8px",
                fontSize: "120%",
                cursor: "pointer"
              }}
            >
              Works
            </button>
              <span style={{display:"block", width:"10px"}}/>
            <button
              onClick={() => navigate("/models")}
              style={{
                color: THEME_COLORS.textPrimary,
                borderRadius: "8px",
                fontSize: "120%",
                cursor: "pointer"
              }}
            >
              Models
            </button>
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