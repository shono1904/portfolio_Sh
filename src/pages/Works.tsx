import { Link } from "react-router-dom";
import { worksData } from "./workData";

const Works = () => {
  return (
    <div style={{padding: "8%" }}>
      <h2>ArtWorks</h2>
      <hr style={{border: "none",borderTop: "3px solid #f1ff59",}}/>
      <br/>
      <div style={{ display: "flex", gap: "20px" }}>
        {worksData.map((work) => (
          <Link key={work.id} to={`/works/${work.id}`}>
            <img src={work.image} alt={`${work.title}のサムネイル`} width={200} style={{borderRadius: "15%"}}/>
            <p style={{color: "#f1ff59", textDecoration: "underline"}}>{work.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
