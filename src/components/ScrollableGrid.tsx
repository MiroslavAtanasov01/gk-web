"use client";
import React, { useState } from "react";
import { getColorClasses } from "../utils/colorStyles";
import styles from "../styles/campaigns.module.css";

interface GridItem {
  id: string;
  text: string;
}

interface ScrollableGridContainerProps {
  title: string;
  items: GridItem[];
  color: "green" | "orange" | "blue";
  initialActiveId?: string | null;
  onItemClick?: (id: string) => void;
  className?: string;
}

const ScrollableGridContainer: React.FC<ScrollableGridContainerProps> = ({
  title,
  items,
  color,
  initialActiveId = null,
  onItemClick,
  className,
}) => {
  const [activeItemId, setActiveItemId] = useState<string | null>(
    initialActiveId,
  );

  const { border, bg, text, hover } = getColorClasses(color);

  const handleItemClick = (itemId: string) => {
    setActiveItemId(itemId);
    if (onItemClick) {
      onItemClick(itemId);
    }
    console.log(`Clicked item ID: ${itemId}`);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="bg-primary flex-shrink-0 rounded-t-2xl py-2 text-center text-white">
        <h3 className="text-sm font-semibold tracking-wide uppercase">
          {title}
        </h3>
      </div>

      <div
        className={`custom-scrollbar border-primary min-h-0 flex-grow overflow-y-auto rounded-b-2xl border-r-2 border-b-2 border-l-2 bg-white pt-2 pb-2 pl-2`}
      >
        <div className="grid grid-cols-2 gap-3 pr-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer rounded-lg border ${styles.item} text-center font-medium transition duration-150 ease-in-out ${
                activeItemId === item.id
                  ? `${border} ${bg} text-white`
                  : `border-2 ${border} bg-white ${text} hover:${border} ${hover}`
              } `}
              onClick={() => handleItemClick(item.id)}
            >
              {item.text}
            </div>
          ))}
          {items.length === 0 && (
            <p className="col-span-2 py-4 text-center text-gray-500">
              Няма налични елементи.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Sample data remains the same
export const sampleCampaigns: GridItem[] = [
  { id: "k15", text: "K № 000015" },
  { id: "k16", text: "K № 000016" },
  { id: "k17", text: "K № 000017" },
  { id: "k18", text: "K № 000018" },
  { id: "k19", text: "K № 000019" },
  { id: "k20", text: "K № 000020" },
  { id: "k21", text: "K № 000021" },
];

export { ScrollableGridContainer };
