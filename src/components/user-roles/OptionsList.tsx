// OptionsList.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const IconUncheckedCircle = ({ className }: { className?: string }) => (
  <div
    className={`${className} h-5 w-5 rounded-full border-2 border-black bg-transparent`}
  />
);

const IconCheckedCircle = ({ className }: { className?: string }) => (
  <Image
    src="/images/user-roles/check-blue.svg"
    alt="Checked"
    width={20}
    height={20}
    className={className}
  />
);

export interface SelectableItem {
  id: string | number;
  label: string;
}

interface MultiSelectProps {
  items: SelectableItem[];
  initialSelectedIds?: (string | number)[];
  onChange?: (selectedIds: (string | number)[]) => void;
  className?: string;
}

const OptionsList: React.FC<MultiSelectProps> = ({
  items = [],
  initialSelectedIds = [],
  onChange,
  className = "",
}) => {
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set(initialSelectedIds),
  );

  useEffect(() => {
    setSelectedIds(new Set(initialSelectedIds));
  }, [initialSelectedIds]);

  const handleToggleSelection = (itemId: string | number) => {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(itemId)) {
      newSelectedIds.delete(itemId);
    } else {
      newSelectedIds.add(itemId);
    }
    setSelectedIds(newSelectedIds);
    if (onChange) {
      onChange(Array.from(newSelectedIds));
    }
  };

  return (
    <div
      className={`border-primary flex flex-col rounded-lg border-2 bg-white p-4 ${className}`}
    >
      {items.length === 0 ? (
        <p className="text-sm text-gray-500">No options available.</p>
      ) : (
        <ul className="space-y-2.5 overflow-y-auto">
          {items.map((item) => {
            const isSelected = selectedIds.has(item.id);
            return (
              <li
                key={item.id}
                className="group flex cursor-pointer items-center"
                onClick={() => handleToggleSelection(item.id)}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    handleToggleSelection(item.id);
                  }
                }}
              >
                {isSelected ? (
                  <IconCheckedCircle className="shrink-0" />
                ) : (
                  <IconUncheckedCircle className="shrink-0" />
                )}
                <span
                  className={`ml-2 text-sm ${
                    isSelected
                      ? "text-sky-500"
                      : "text-gray-700 group-hover:text-sky-600"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default OptionsList;
