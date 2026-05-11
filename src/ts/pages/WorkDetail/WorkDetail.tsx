import { useParams } from "react-router-dom";
import { worksData } from "./workData";

type WorkDetailProps = {
  isDarkTheme: boolean;
};

const getPageStyle = (isDarkTheme: boolean): React.CSSProperties => {
  if (!isDarkTheme) {
    return {
      marginTop: "60px",
      padding: "20px",
      display: "flex",
      gap: "20px",
    };
  }

  return {
    marginTop: "60px",
    padding: "24px",
    display: "flex",
    gap: "20px",
    background: "#10141d",
    color: "#e7ecf5",
    borderRadius: "16px",
    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.28)",
  };
};

const getNotFoundStyle = (isDarkTheme: boolean): React.CSSProperties => {
  if (!isDarkTheme) {
    return {
      marginTop: "60px",
      padding: "20px",
    };
  }

  return {
    marginTop: "60px",
    padding: "24px",
    background: "#10141d",
    color: "#e7ecf5",
    borderRadius: "16px",
    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.28)",
  };
};

const WorkDetail = ({ isDarkTheme }: WorkDetailProps) => {
  const { id } = useParams();
  const work = worksData.find((item) => item.id === id);

  if (!work) {
    return (
      <div style={getNotFoundStyle(isDarkTheme)}>
        <h2>Work Detail</h2>
        <p>指定された作品は見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div style={getPageStyle(isDarkTheme)}>
      <title>{work.title} - Shono-fox.com</title>
      <div style={{flex:1 , textAlign: "left" }}>
        <h2>作品名:{work.title}</h2>
        <br/>
        <p style={{ marginTop: "16px", lineHeight: 1.7, whiteSpace: "pre-line" }}>{work.description}</p>
      </div>
      <div style={{flex: 3, display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
        <img
          src={work.image}
          alt={`${work.title}の作品画像`}
          style={{ width: "min(100%, 640px)", borderRadius: "12px"}}
        />
      </div>
      <div style={{flex: 1}}></div>
    </div>
  );
};

export default WorkDetail;
