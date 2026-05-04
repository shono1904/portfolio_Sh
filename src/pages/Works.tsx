import { Link } from "react-router-dom";
import { worksData } from "./workData";

const Works = () => {
  return (
    <>
    <title>Works - Shono.mu</title>
    <div style={{padding: "8%" }}>
      <p style={{fontSize:"36px", display: "inline-block", margin: 0}}>ArtWorks</p><p style={{fontSize:"12px", display: "inline-block", margin: 0}}>　作品一覧</p>
      <hr style={{border: "none",borderTop: "3px solid #f1ff59", margin: "8px 0"}}/>
      <div style={{ display: "flex", gap: "20px" }}>
        {worksData.map((work) => (
          <Link key={work.id} to={`/works/${work.id}`} className="works-link">
            <img src={work.image} alt={`${work.title}のサムネイル`} width={200} style={{borderRadius: "15%"}}/>
            <p style={{textDecoration: "underline"}}>{work.title}</p>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Works;
