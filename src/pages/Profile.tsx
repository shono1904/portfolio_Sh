import { useNavigate } from "react-router-dom";
import PlofileImg from "./profile.png";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
    <title>Profile - Shono.mu</title>
    <div style={{padding: "8%"}}>
      <h1 style={{ margin: 0, display: "inline" }}>
        Profile
        <span style={{ fontSize: "1rem", fontWeight: "normal" }}> プロフィール</span>
      </h1>
      <hr style={hrstyle}/>
      <span style={{display:"block", height:"30px"}}/>
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <img src={PlofileImg} alt="プロフィール画像" style={{width: "15%", height: "auto", borderRadius: "15%", flexShrink: 0}} />
        <div>
          <h2 style={{ margin: 0 }}>しょうの</h2>
          <p>
            趣味と仕事で3Dモデリングを行う創作人間<br/>
            <br/>
            芝浦工業大学の創作サークル<a href="https://digicre.net/welcome" style={{textDecoration: "none",color: "white"}}>デジクリ</a>所属<br/><br/>
            2023年からBlenderでケモ耳娘の3Dモデル作成を開始。写真を背景に使用し、3Dモデルをイラスト風のシェーダーでメインに配置する一次創作イラストの作成も行なっている
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => navigate("/works")}
              style={{
                background:"rgba(77, 77, 77, 0)",
                color: "white",
                border: "1px solid #f1ff59",
                borderRadius: "8px",
                fontSize: "120%",
                cursor: "pointer"
              }}
            >
              作品を見る
            </button>
              <span style={{display:"block", width:"10px"}}/>
            <button
              onClick={() => navigate("/models")}
              style={{
                background:"rgba(77, 77, 77, 0)",
                color: "white",
                border: "1px solid #f1ff59",
                borderRadius: "8px",
                fontSize: "120%",
                cursor: "pointer"
              }}
            >
              モデルを見る
            </button>
          </div>
          </div>
      </div>
      <hr style={hrstyle}/>
      <div>
        <h1>
          Career
        </h1>

      </div>
      <hr style={hrstyle}/>
      <div>
        <h1>
          Tools
        </h1>
        <div style={{ marginTop: "20px", display: "grid", gap: "12px" }}>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "1.4rem", fontWeight: 700 }}>
                Software
              </summary>
              <p style={{ marginTop: "8px" }}>
                ・Blender<br/>
                ・Clip Studio Paint<br/>
                ・Adobe Photoshop
              </p>
            </details>
            <span style={{display:"block", height:"10%"}}/>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "1.4rem", fontWeight: 700 }}>
                Hardware
              </summary>
              <div style={{ marginTop: "8px" }}>
                <h3 style={{ margin: "0 0 6px 0" }}>Desktop</h3>
                <p style={{ margin: "0 0 10px 0" }}>
                  Windows 11 Pro<br/>
                  ・CPU: Core i9 12900k<br/>
                  ・GPU: Geforce RTX 4080super<br/>
                  ・RAM: DDR4 32GB<br/>
                  ・Pen Tablet: Huion Kamvas 13<br/>
                </p>
                <h3 style={{ margin: "0 0 6px 0" }}>Portable</h3>
                <p style={{ margin: 0 }}>
                  M4 MacBook Air<br/>
                  ・RAM:32GB<br/>
                  ・Strage:512GB
                </p>
              </div>
            </details>
            <span style={{display:"block", height:"10%"}}/>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "1.4rem", fontWeight: 700 }}>
                取得済み資格
              </summary>
              <p style={{ marginTop: "8px" }}>
                ・画像処理エンジニア検定エキスパート<br/>
                ・CGエンジニア検定ベーシック
              </p>
            </details>
            <span style={{display:"block", height:"10%"}}/>
          </div>
      </div>
      <hr style={hrstyle}/>
      <div>
        最近のマイブーム:Normal mapを作成してより立体感のある陰影を表現する
      </div>
    </div>
    </>
  )
}

const hrstyle: React.CSSProperties = {
  border: "none",
  borderTop: "3px solid #f1ff59",
}

export default Profile;