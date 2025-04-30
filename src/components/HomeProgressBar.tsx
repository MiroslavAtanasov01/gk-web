import React from "react";

type HomeProgressBarProps = {
  value: number;
};

export default function HomeProgressBar({ value }: HomeProgressBarProps) {
  const getCustomGradient = (): string => {
    if (value < 30) {
      return " linear-gradient(360deg,rgba(174, 15, 10, 1) 0%, rgba(227, 6, 19, 1) 50%, rgba(218, 7, 17, 1) 63%, rgba(195, 11, 13, 1) 84%, rgba(174, 15, 10, 1) 100%)";
    }
    if (value < 70) {
      return "linear-gradient(360deg,rgba(228, 126, 26, 1) 0%, rgba(239, 179, 51, 1) 50%, rgba(237, 170, 46, 1) 63%, rgba(232, 147, 36, 1) 84%, rgba(228, 126, 26, 1) 100%)";
    }
    return "linear-gradient(360deg,rgba(35, 98, 82, 1) 0%, rgba(127, 187, 72, 1) 50%, rgba(118, 178, 72, 1) 59%, rgba(95, 156, 75, 1) 73%, rgba(57, 119, 79, 1) 91%, rgba(35, 98, 82, 1) 100%)";
  };

  const getBorderColor = (): string => {
    if (value < 30) return "#AE0F0A";
    if (value < 70) return "#EB5B27";
    return "#236252";
  };

  return (
    <div className="flex items-center ">
      {/* Percentage box */}
      <div
        className="text-white text-sm font-bold px-2 py-0.5 "
        style={{
          background: getCustomGradient(),
          border: `2px solid ${getBorderColor()}`,
          height: "26px",
          minWidth: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {value}%
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xl h-6 bg-gray-200  relative overflow-hidden">
        <div
          className="h-full absolute  rounded-r-full transition-all duration-300"
          style={{
            width: `${value}%`,
            background: getCustomGradient(),
          }}
        ></div>
      </div>
    </div>
  );
}
