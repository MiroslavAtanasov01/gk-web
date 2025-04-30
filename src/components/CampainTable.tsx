"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// --- PLACEHOLDER Custom Icon Components ---
// Replace these with your actual icon components.
// They should accept className props if you want to control size/color via Tailwind.
const IconTemplate = ({ className }) => <span className={className}>📄</span>; // Example
const IconImport = ({ className }) => <span className={className}>📥</span>;
const IconDelete = ({ className }) => <span className={className}>🗑️</span>;
const IconEdit = ({ className }) => <span className={className}>✏️</span>;
const IconAdd = ({ className }) => <span className={className}>➕</span>;
const IconExport = ({ className }) => <span className={className}>📤</span>;
const IconUncheckedCircle = ({ className }) => (
  <span className={className}>⚪</span>
);
const IconCheckedCircle = ({ className }) => (
  <span className={className}>✔️</span>
); // Using a checkmark, adjust as needed
// --- End Placeholder Icons ---

const campaignData = [
  { id: 1, code: "001/001", name: "кампания № 001" },
  { id: 2, code: "001/001", name: "кампания № 002" },
  { id: 3, code: "001/001", name: "кампания № 003" },
  { id: 4, code: "001/001", name: "кампания № 004" },
  { id: 5, code: "001/001", name: "кампания № 005" },
];

function CampaignTable() {
  // State to keep track of the selected row's ID
  const [selectedId, setSelectedId] = useState(2);

  const handleRowClick = (id) => {
    setSelectedId(id);
    console.log(`Selected campaign ID: ${id}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
        {/* Column Titles */}
        <div className="flex items-center space-x-4">
          <span className="font-bold text-blue-600 w-8 text-center">№</span>
          <span className="font-bold text-blue-600">Кампания</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center bg-sky-500 hover:bg-sky-600 text-white text-sm px-3 py-1.5 rounded-md transition duration-150 ease-in-out">
            {/* Use your custom icon component here */}
            <IconTemplate className="mr-1 w-4 h-4" /> Шаблон
          </button>
          <button className="flex items-center bg-sky-500 hover:bg-sky-600 text-white text-sm px-3 py-1.5 rounded-md transition duration-150 ease-in-out">
            {/* Use your custom icon component here */}
            <IconImport className="mr-1 w-4 h-4" /> Импорт
          </button>
          <button
            className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white w-8 h-8 rounded-md transition duration-150 ease-in-out"
            title="Изтрий"
          >
            {/* Use your custom icon component here */}
            <IconDelete className="w-4 h-4" />
          </button>
          <button
            className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white w-8 h-8 rounded-md transition duration-150 ease-in-out"
            title="Редактирай"
          >
            {/* Use your custom icon component here */}
            <IconEdit className="w-4 h-4" />
          </button>
          <button
            className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white w-8 h-8 rounded-md transition duration-150 ease-in-out"
            title="Добави"
          >
            {/* Use your custom icon component here */}
            <IconAdd className="w-4 h-4" />
          </button>
          <button className="flex items-center bg-sky-500 hover:bg-sky-600 text-white text-sm px-3 py-1.5 rounded-md transition duration-150 ease-in-out">
            {/* Use your custom icon component here */}
            <IconExport className="mr-1 w-4 h-4" /> Експорт
          </button>
        </div>
      </div>

      {/* Data Rows */}
      <div className="space-y-1">
        {campaignData.map((campaign) => {
          const isSelected = campaign.id === selectedId;
          return (
            <div
              key={campaign.id}
              onClick={() => handleRowClick(campaign.id)}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition duration-150 ease-in-out ${
                isSelected
                  ? "bg-green-500 text-white font-semibold" // Selected row style
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800" // Default row style
              }`}
            >
              {/* Radio button representation */}
              <div className="w-8 flex justify-center items-center mr-1">
                {isSelected ? (
                  // Use your custom checked icon component here
                  <IconCheckedCircle
                    className={`text-xl ${isSelected ? "text-white" : "text-gray-500"}`}
                  />
                ) : (
                  // Use your custom unchecked icon component here
                  <IconUncheckedCircle
                    className={`text-xl ${isSelected ? "text-white" : "text-gray-500"}`}
                  />
                )}
              </div>

              {/* Number */}
              <span
                className={`w-8 text-center ${isSelected ? "text-white" : "text-gray-700"}`}
              >
                {campaign.id}
              </span>

              {/* Campaign Text */}
              <span
                className={`ml-4 ${isSelected ? "text-white" : "text-gray-900"}`}
              >
                Шифр {campaign.code} {campaign.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CampaignTable;
