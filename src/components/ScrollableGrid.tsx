"use client";
import React from "react";

interface GridItem {
  id: string;
  text: string;
  isActive?: boolean;
}

interface ScrollableGridContainerProps {
  title: string;
  items: GridItem[];
  containerHeightClass?: string;
}

const ScrollableGridContainer: React.FC<ScrollableGridContainerProps> = ({
  title,
  items,
  containerHeightClass = "h-37",
}) => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="bg-[var(--color-primary)] text-white text-center py-2 rounded-t-2xl">
        <h3 className="">{title}</h3>
      </div>
      {/* Scrollable Content Area */}
      <div
        className={`overflow-y-auto ${containerHeightClass} p-2 border-2 border-[var(--color-primary)] rounded-b-2xl`}
      >
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`
                p-4 rounded-lg border text-center font-medium cursor-pointer
                transition duration-150 ease-in-out
                ${
                  item.isActive
                    ? "bg-green-600 text-white border-green-700 shadow-md"
                    : "bg-white text-green-600 border-green-400 hover:bg-green-50 hover:border-green-500"
                }
              `}
              onClick={() => console.log(`Clicked item: ${item.text}`)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const sampleCampaigns: GridItem[] = [
  { id: "k15", text: "K № 000015", isActive: true },
  { id: "k16", text: "K № 000016" },
  { id: "k17", text: "K № 000017" },
  { id: "k18", text: "K № 000018" },
  { id: "k19", text: "K № 000019" },
  { id: "k20", text: "K № 000020" },
  { id: "k21", text: "K № 000021" },
];

export { ScrollableGridContainer };
