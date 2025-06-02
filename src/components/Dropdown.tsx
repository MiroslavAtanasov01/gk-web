"use client";

import Image from "next/image";
import { ChangeEvent } from "react";

interface DropdownProps {
  label?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  labelColor?: string;
  activate?: boolean;
  onToggleActivate?: () => void;
}

export default function Dropdown({
  label,
  value,
  options,
  onChange,
  className = "",
  disabled = false,
  labelColor = "black",
  activate = false,
  onToggleActivate,
}: DropdownProps) {
  const getLabelColorClass = (active: boolean, color: string) =>
    active ? `text-${color}` : "text-[#9F9FA3]";

  return (
    <div className="flex flex-row items-end">
      <div className={`w-full ${className}`}>
        {label && (
          <label
            className={`title-fields mb-1 ml-2 block text-xl font-medium ${getLabelColorClass(activate, labelColor)}`}
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <select
            className={`${activate ? "border-secondary" : "border-[#9F9FA3]"} focus:border-secondary w-full appearance-none rounded-xl border-2 bg-white px-2 pr-10 text-xl focus:outline-none`}
            value={value}
            disabled={disabled}
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
      <div className="ml-2 flex flex-col items-center">
        <label
          className={`text-${activate ? "secondary" : "black"} title-fields mb-2 block text-xl font-medium`}
        >
          Активиране
        </label>
        <Image
          src={activate ? "/images/checked.svg" : "/images/not-checked.svg"}
          alt="toggle"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={onToggleActivate}
        />
      </div>
    </div>
  );
}
