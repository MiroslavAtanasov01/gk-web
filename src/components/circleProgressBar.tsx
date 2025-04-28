import React from "react";

interface SegmentedCircularProgressProps {
  value: number;
}

type ColorKey = "red" | "yellow" | "green" | "gray";

const SegmentedCircularProgress: React.FC<SegmentedCircularProgressProps> = ({
  value,
}) => {
  const size = 60;
  const stroke = 6;
  const segments = 8;
  const gapDeg = 8;
  const center = size / 2;
  const radius = center - stroke;
  const filledSegments = Math.round((value / 100) * segments);

  const getColorKey = (): ColorKey => {
    if (value === 0) return "gray";
    if (value < 30) return "red";
    if (value < 70) return "yellow";
    return "green";
  };

  const colorKey = getColorKey();

  const colorMap: Record<string, string> = {
    red: "#ef4444", // Tailwind red-500
    yellow: "#EFB333", // Tailwind yellow-400
    green: "#7BBA3A", // Tailwind green-500
    gray: "#d1d5db", // Tailwind gray-300
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
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg width={size} height={size}>
        {paths}
      </svg>
      <div
        className={`absolute text-sm font-bold`}
        style={{ color: colorMap[colorKey] }}
      >
        {value}%
      </div>
    </div>
  );
};

export default SegmentedCircularProgress;
