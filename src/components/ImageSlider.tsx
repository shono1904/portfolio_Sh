// ImageSlider.tsx
import { useEffect, useState } from "react";
import Image1 from './HomeImages/adventCarendar_End_FHD.png'

const images = [Image1];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[index]}
      alt="slider"
      style={{ width: "100%", height: "auto", objectFit: "contain" }}
    />
  );
};

export default ImageSlider;
