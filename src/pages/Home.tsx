import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div style={{ }}>
      <div style={{ position: "relative" }}>
        <ImageSlider />
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "15%",
            color: "white",
            transform: "translateX(-50%)",
            zIndex: 2,
            margin: 0,
          }}
        >
          <div style={{marginTop: "20%" }}>Shono's Workshop</div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
