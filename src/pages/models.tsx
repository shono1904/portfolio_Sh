import { Link } from "react-router-dom";

const Models = () => {
  return (
    <>
    <title>Models - Shono.mu</title>
    <div style={{padding: "8%" }}>
      <h2>Models</h2>
      <hr style={{border: "none",borderTop: "3px solid #f1ff59",}}/>
      <span style={{display:"block", height:"10px"}}/>
      <p style={{ marginBottom: "16px" }}>3Dモデル一覧</p>
      <Link to="/models/kyoka">Kyoka</Link>
    </div>
    </>
  );
} 

export default Models;