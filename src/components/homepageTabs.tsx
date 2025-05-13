"use client";

import Image from "next/image";
import CircularProgressBar from "@/components/CircleProgressBar";
import React, { useState } from "react";
import styles from "../styles/homapageTabs.module.css";

type TabProps = {
  image: string;
  text: string;
  precents: number;
  onClick?: () => void;
};

export default function Tab({ image, text, precents, onClick }: TabProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultBackground = "transparent";
  const hoverBackground =
    "radial-gradient(circle, rgba(179, 229, 252, 0.57) 1%, rgba(224, 242, 247, 0.03) 82%)";

  return (
    <div
      className={`m-3 flex items-center ${styles.tab}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? hoverBackground : defaultBackground,
        transition: "background 0.3s ease",
      }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="icon"
        width={50}
        height={50}
        className={`${styles.icon} rounded`}
      />

      <p className="flex-1 pl-2 text-base font-semibold text-[var(--color-text-secondary)]">
        {text}
      </p>

      <div>
        {isHovered ? (
          <Image
            src="/images/home/arrow.svg"
            alt="icon"
            width={30}
            height={30}
            className="m-1 rounded"
          />
        ) : (
          <CircularProgressBar value={precents} />
        )}
      </div>
    </div>
  );
}
