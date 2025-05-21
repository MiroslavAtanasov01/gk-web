"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/styles/campaign.css";
import { initialUsersData } from "@/utils/mockData";

// Helper SVG Icon Components (Search and Chevrons are still used)
const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 22 22"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const IconUncheckedCircle = ({ className }: { className?: string }) => (
  <div
    className={`${className} h-5 w-5 rounded-full border-2 border-black`}
    style={{ backgroundColor: "transparent" }}
  />
);

const IconCheckedCircle = ({ className }: { className?: string }) => (
  <Image
    src="/images/campaign/check.svg"
    alt="Checked"
    width={20}
    height={20}
    className={className}
  />
);
export interface UserData {
  id: number;
  num: number;
  name: string;
  email: string;
}

function UserListComponent() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRowClick = (id: number) => {
    setSelectedUserId(id);
  };

  const filteredUsers = initialUsersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {/* Header: Search and Actions */}
      <div className="mb-2 flex items-center justify-between px-3">
        <div className="mr-2 flex flex-grow items-center">
          <span className="text-secondary mr-2 shrink-0 text-lg font-semibold">
            Търсене
          </span>
          <div className="relative flex w-full items-center">
            {" "}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-secondary focus:ring-secondary focus:border-secondary h-7 w-full rounded-lg border-2 px-2 py-1 pr-7 text-lg focus:ring-1 focus:outline-none"
            />
            <SearchIcon className="text-secondary absolute right-1.5 h-4 w-4" />
          </div>
        </div>
        <div className="flex shrink-0 items-center space-x-1">
          {" "}
          <button className="btn-primary btn-icon min-h-3" title="Изтрий">
            <Image
              src="/images/campaign/delete.svg"
              alt="Изтрий"
              width={13}
              height={13}
            />
          </button>
          <button className="btn-primary btn-icon min-h-3" title="Редактирай">
            <Image
              src="/images/campaign/pencil.svg"
              alt="Редактирай"
              width={15}
              height={15}
            />
          </button>
          <button className="btn-primary btn-icon mr-5 min-h-3" title="Добави">
            <Image
              src="/images/campaign/plus.svg"
              alt="Добави"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="text-primary mb-1 flex items-center pr-2 font-bold">
        <div className="w-7 shrink-0 py-1"></div>
        <span className="w-8 shrink-0 py-1 text-center text-lg font-medium">
          №
        </span>
        <span className="flex-grow px-1 py-1 text-lg font-medium">
          Фамилия, Име, Презиме
        </span>
        <span className="w-[180px] shrink-0 px-1 py-1 text-lg font-medium">
          e-mail
        </span>
      </div>

      {/* Table Body */}
      <div className="custom-scrollbar min-h-0 flex-1 space-y-px overflow-y-auto pr-3">
        {filteredUsers.map((user) => {
          const isSelected = user.id === selectedUserId;

          let rowBgClass = "";
          if (isSelected) {
            rowBgClass = "bg-custom-green text-white";
          } else {
            const originalIndex = initialUsersData.findIndex(
              (u) => u.id === user.id,
            );
            if (originalIndex % 2 === 0) {
              rowBgClass = "bg-gray-bg text-black";
            } else {
              rowBgClass = "bg-white text-black";
            }
          }

          return (
            <div
              key={user.id}
              onClick={() => handleRowClick(user.id)}
              className={`flex h-[30px] cursor-pointer items-center rounded-2xl text-lg ${rowBgClass} hover:bg-gray-100 ${isSelected ? "hover:text-white" : "hover:text-black"}`}
            >
              <div className="flex w-7 shrink-0 items-center justify-center">
                {isSelected ? <IconCheckedCircle /> : <IconUncheckedCircle />}
              </div>
              <span className="w-8 shrink-0 py-0.5 text-center">
                {user.num}
              </span>
              <span className="flex-grow truncate px-1 py-0.5">
                {user.name}
              </span>
              <span className="w-[180px] shrink-0 truncate py-0.5 pr-2">
                {user.email}
              </span>
            </div>
          );
        })}
        {filteredUsers.length === 0 && (
          <div className="py-4 text-center text-lg">
            Няма намерени потребители.
          </div>
        )}
      </div>
    </>
  );
}

export default UserListComponent;
