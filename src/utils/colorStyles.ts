export function getColorClasses(color: "green" | "orange" | "blue") {
  switch (color) {
    case "green":
      return {
        border: "border-[#7FBB48]",
        text: "text-[#7FBB48]",
        hover: "hover:bg-[#eef8e9]",
        bg: "bg-[radial-gradient(circle,_#7FBB48,_#236252)]",
      };
    case "orange":
      return {
        border: "border-[#EFB333]",
        text: "text-[#EFB333]",
        hover: "hover:bg-[#fff7e5]",
        bg: "bg-[radial-gradient(circle,_#F8C822,_#F3912A)]",
      };
    case "blue":
      return {
        border: "border-[#52A3DB]",
        text: "text-[#52A3DB]",
        hover: "hover:bg-[#e8f4fb]",
        bg: "bg-[radial-gradient(circle,_#74ACDA,_#25509A)]",
      };
  }
}
