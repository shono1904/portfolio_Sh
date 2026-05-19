import { useEffect, useState } from "react";
import Image1 from './../../assets/images/home/adventCarendar_End_FHD.webp'
import Image2 from './../../assets/images/home/f161fa9239dd7e9b.webp'

const images = [Image1, Image2];

type ImageSliderProps = {
  slideIntervalMs?: number;
  transitionDurationMs?: number;
};

const DEFAULT_SLIDE_INTERVAL_MS = 5000;
const DEFAULT_TRANSITION_DURATION_MS = 700;

const ImageSlider = ({
  slideIntervalMs = DEFAULT_SLIDE_INTERVAL_MS,
  transitionDurationMs = DEFAULT_TRANSITION_DURATION_MS,
}: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null as number | null);
  const transitionDurationSeconds = transitionDurationMs / 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((index + 1) % images.length);
    }, slideIntervalMs);

    return () => clearInterval(interval);
  }, [index, slideIntervalMs]);

  const handleNext = () => {
    if (nextIndex === null) {
      setNextIndex((index + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (nextIndex === null) {
      setNextIndex((index - 1 + images.length) % images.length);
    }
  };

  const handleSelect = (targetIndex: number) => {
    if (nextIndex === null && targetIndex !== index) {
      setNextIndex(targetIndex);
    }
  };

  const handleAnimationEnd = () => {
    if (nextIndex !== null) {
      setIndex(nextIndex);
      setNextIndex(null);
    }
  };

  return (
    <div className="image-slider" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* 現在の画像 */}
      <img
        src={images[index]}
        alt="slider-current"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
          position: "absolute",
          animation: nextIndex !== null ? `slideOutUp ${transitionDurationSeconds}s ease-out forwards` : "none"
        }}
      />
      {/* 次の画像 */}
      {nextIndex !== null && (
        <img
          src={images[nextIndex]}
          alt="slider-next"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            position: "absolute",
            animation: `slideInUp ${transitionDurationSeconds}s ease-out forwards`
          }}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      {/* ボタンコンテナ */}
      <div
        className="image-slider-button-container"
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          width: "54px",
          borderRadius: "27px",
          height: `${40*(images.length + 2) + 8*(images.length + 1) + 22}px`,

          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 10
        }}
      >
        <button
          className="image-slider-button"
          onClick={handlePrev}
          style={{
            width: "40px",
            height: "40px",
            padding: "0",
            borderRadius: "50%",
            border: "1px solid #7e7e7e",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backdropFilter: "blur(4px)"
          }}
        >
          ▲
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
          {images.map((_, imageIdx) => {
            const isActive = nextIndex === null ? index === imageIdx : nextIndex === imageIdx;

            return (
              <button
                className={`image-slider-button ${isActive ? "is-active" : ""}`}
                key={imageIdx}
                onClick={() => handleSelect(imageIdx)}
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "0",
                  borderRadius: "50%",
                  border: "1px solid #7e7e7e",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                
              </button>
            );
          })}
        </div>

        <button
          className="image-slider-button"
          onClick={handleNext}
          style={{
            width: "40px",
            height: "40px",
            padding: "0",
            borderRadius: "50%",
            border: "1px solid #7e7e7e",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backdropFilter: "blur(4px)"
          }}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
