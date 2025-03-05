import { useEffect, useRef, useState } from "react";

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

const Background = () => {
  const [noiseImage, setNoiseImage] = useState("");

  useEffect(() => {
    const noiseDataUrl = generateNoiseImage(200, 200);
    setNoiseImage(noiseDataUrl);
  }, []);

  return (
    <div className="absolute inset-0  ">
      <DynamicGradientCanvas />
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${noiseImage})`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          opacity: 0.1,
        }}
      />
    </div>
  );
};

interface BlobProps {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

const DynamicGradientCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const hexToRgba = (hex: string, alpha: number): string => {
    const sanitized = hex.replace("#", "");
    const bigint = parseInt(sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const createBlob = (x : number, y : number, radius : number, color : string): BlobProps => {
    return {
      x: x,
      y: y,
      dx: 0,//-0.5 + Math.random(),
      dy: 0,//-0.5 + Math.random(),
      radius: radius,
      color: color,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);


    let blobs: BlobProps[] = [];

    {
    blobs.push(createBlob(0.05 * canvas.width, 0.1 * canvas.height, 250, "#2bff00"))
    blobs.push(createBlob(0.1 * canvas.width, 0.1 * canvas.height, 200, "#ff6200"))
    blobs.push(createBlob(0.2 * canvas.width, 0.2 * canvas.height, 250, "#ff9500"))
    blobs.push(createBlob(0.25 * canvas.width, 0.4 * canvas.height, 200, "#0063dc"))
    blobs.push(createBlob(0.3 * canvas.width, 0.45 * canvas.height, 300, "#00ffff"))
    blobs.push(createBlob(0.35 * canvas.width, 0.4 * canvas.height, 250, "#fdfc03"))

    blobs.push(createBlob(0 * canvas.width, 0.9 * canvas.height, 300, "#f2029e"))
    blobs.push(createBlob(0.55 * canvas.width, 0.1 * canvas.height, 300, "#008bf8"))
    blobs.push(createBlob(0.25 * canvas.width, 0.8 * canvas.height, 300, "#ee2b50"))
    blobs.push(createBlob(0.5 * canvas.width, 0.35 * canvas.height, 250, "#00ff80"))
    blobs.push(createBlob(0.75 * canvas.width, 0.1 * canvas.height, 250, "#8000ff"))
    blobs.push(createBlob(0.85 * canvas.width, 0.1 * canvas.height, 250, "#00f220"))
    blobs.push(createBlob(0.6 * canvas.width, 0.3 * canvas.height, 200, "#00f220"))

    blobs.push(createBlob(0.7 * canvas.width, 0.45 * canvas.height, 300, "#f08b00"))
    blobs.push(createBlob(0.95 * canvas.width, 0.6 * canvas.height, 300, "#f4d107"))    
    blobs.push(createBlob(0.8 * canvas.width, 0.8 * canvas.height, 300, "#ff0084"))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "darken";

      blobs.forEach((blob) => {
        const centerColor = hexToRgba(blob.color, 0.7); 
        const midColor = hexToRgba(blob.color, 0.1);

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        gradient.addColorStop(0, centerColor);
        gradient.addColorStop(0.7, midColor);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      blobs = blobs.map((blob) => {
        let { x, y, dx, dy, radius, color } = blob;

        x += dx;
        y += dy;

        if (x - radius < 0 || x + radius > canvas.width) {
          dx = -dx;
        }
        if (y - radius < 0 || y + radius > canvas.height) {
          dy = -dy;
        }

        return { x, y, dx, dy, radius, color };
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default Background;
