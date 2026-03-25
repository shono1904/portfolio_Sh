import { useParams } from "react-router-dom";
import { worksData } from "../workData";

const WorkDetail = () => {
  const { id } = useParams();
  const work = worksData.find((item) => item.id === id);

  if (!work) {
    return (
      <div style={{ marginTop: "60px", padding: "20px" }}>
        <h2>Work Detail</h2>
        <p>指定された作品は見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "60px", padding: "20px" }}>
      <h2>{work.title}</h2>
      <p>作品ID: {work.id}</p>
      <img
        src={work.image}
        alt={`${work.title}の作品画像`}
        style={{ width: "min(100%, 640px)", borderRadius: "12px", display: "block" }}
      />
      <p style={{ marginTop: "16px", lineHeight: 1.7 }}>{work.description}</p>
    </div>
  );
};

export default WorkDetail;
