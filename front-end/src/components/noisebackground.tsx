import { useEffect, useState } from "react";

const generateNoiseImage = (width: number, height: number) => {
  // Create an offscreen canvas
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // Create ImageData to hold our pixel noise
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const v = Math.floor(Math.random() * 256);
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);

  // Convert canvas to a data URL
  return canvas.toDataURL();
};

const NoiseBackground = () => {
  const [noiseImage, setNoiseImage] = useState("");
  
    useEffect(() => {
      const noiseDataUrl = generateNoiseImage(200, 200);
      setNoiseImage(noiseDataUrl);
    }, []);

    return (
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${noiseImage})`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          opacity: 0.1,
        }}
      />
    )
}

export default NoiseBackground