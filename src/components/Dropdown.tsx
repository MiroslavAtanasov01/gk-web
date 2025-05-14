"use client";

import Image from "next/image";
import { ChangeEvent } from "react";

interface DropdownProps {
  label?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  className?: string;
}

export default function Dropdown({
  label,
  value,
  options,
  onChange,
  className = "",
}: DropdownProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1 block text-xl font-medium">{label}</label>
      )}
      <div className="relative w-full">
        <select
          className="border-secondary focus:border-secondary w-full appearance-none rounded-xl border-2 bg-white px-2 pr-10 text-xl focus:ring-0 focus:outline-none"
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onChange(e.target.value)
          }
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
          <Image
            src="/images/down-arrow.svg"
            alt="arrow"
            width={20}
            height={15}
          />
        </span>
      </div>
    </div>
  );
}
