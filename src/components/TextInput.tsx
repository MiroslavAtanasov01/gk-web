"use client";

import Image from "next/image";
import { ChangeEvent } from "react";

interface TextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  activate?: boolean;
  number?: boolean;
  onToggleActivate?: () => void;
}

export default function TextInput({
  label,
  value,
  onChange,
  className = "",
  disabled = false,
  activate = false,
  number = false,
  onToggleActivate,
}: TextInputProps) {
  return (
    <div className="flex flex-row items-end">
      <div className={`w-full ${className}`}>
        {label && (
          <label
            className={`${activate ? "text-secondary" : "text-[#9F9FA3]"} mb-1 ml-2 block text-xl font-medium`}
          >
            {label}
          </label>
        )}
        <input
          type={number ? "number" : "text"}
          value={value}
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          className={`${
            activate ? "border-secondary" : "border-[#9F9FA3]"
          } focus:border-secondary w-full rounded-xl border-2 bg-white px-2 text-xl focus:outline-none`}
        />
      </div>
      <div className="ml-2 flex flex-col items-center">
        <label
          className={`text-${activate ? "secondary" : "black"} mb-2 block text-xl font-medium`}
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
