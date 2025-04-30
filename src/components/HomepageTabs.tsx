"use client";

import Image from "next/image";
import CircularProgressBar from "@/components/CircleProgressBar";
import React, { useState } from "react";
import styles from "../styles/homapageTabs.module.css";

type TabProps = {
  image: string;
  text: string;
  precents: number;
};

export default function Tab({ image, text, precents }: TabProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultBackground = "transparent";
  const hoverBackground =
    "radial-gradient(circle, rgba(179, 229, 252, 0.57) 1%, rgba(224, 242, 247, 0.03) 82%)";

  return (
    <div
      className={`flex items-center m-3 ${styles.tab}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? hoverBackground : defaultBackground,
        transition: "background 0.3s ease",
      }}
    >
      <Image
        src={image}
        alt="icon"
        width={50}
        height={50}
        className={`${styles.icon} rounded`}
      />

      <p className="text-base font-semibold flex-1 text-[var(--color-text-secondary)] pl-2">
        {text}
      </p>

      <div>
        {isHovered ? (
          <Image
            src="/images/home/arrow.svg"
            alt="icon"
            width={30}
            height={30}
            className="rounded m-1"
          />
        ) : (
          <CircularProgressBar value={precents} />
        )}
      </div>
    </div>
  );
}
