import React, { useEffect, useState } from "react";

type SegmentedCircularProgressProps = {
  value: number;
};

export default function SegmentedCircularProgress({
  value,
}: SegmentedCircularProgressProps) {
  const [size, setSize] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const h = window.innerHeight;
      const newSize = h > 700 && h < 850 ? 50 : h > 850 && h < 950 ? 60 : 70;
      setSize(newSize);
    };

    updateSize();
    setHasMounted(true);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!hasMounted || size === null) return null;

  const stroke = 6;
  const segments = 8;
  const gapDeg = 8;
  const center = size / 2;
  const radius = center - stroke;
  const filledSegments = Math.round((value / 100) * segments);

  type ColorKey = "red" | "yellow" | "green" | "gray";

  const getColorKey = (): ColorKey => {
    if (value === 0) return "gray";
    if (value < 30) return "red";
    if (value < 70) return "yellow";
    return "green";
  };

  const colorKey: ColorKey = getColorKey();

  const colorMap: Record<ColorKey, string> = {
    red: "#ef4444",
    yellow: "#EFB333",
    green: "#7BBA3A",
    gray: "#d1d5db",
  };

  const polarToCartesian = (
    cx: number,
    cy: number,
    r: number,
    angleDeg: number,
  ): { x: number; y: number } => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy + r * Math.sin(angleRad),
    };
  };

  const createArc = (startAngle: number, endAngle: number): string => {
    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);
    const largeArc = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArc,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  const paths = Array.from({ length: segments }, (_, i) => {
    const segmentDeg = 360 / segments;
    const startAngle = segmentDeg * i + gapDeg / 2;
    const endAngle = startAngle + segmentDeg - gapDeg;

    const isFilled = i < filledSegments;
    const strokeColor = isFilled ? colorMap[colorKey] : colorMap.gray;

    return (
      <path
        key={i}
        d={createArc(startAngle, endAngle)}
        fill="none"
        stroke={strokeColor}
        strokeWidth={stroke}
        strokeLinecap="butt"
      />
    );
  });

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
        {paths}
      </svg>
      <div
        className="absolute font-bold"
        style={{
          color: colorMap[colorKey],
          fontSize: `${size * 0.25}px`,
        }}
      >
        {value}%
      </div>
    </div>
  );
}
