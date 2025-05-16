"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/styles/campaign.css";

// Helper SVG Icon Components (Search and Chevrons are still used)
const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
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
interface UserData {
  id: number;
  num: number;
  name: string;
  email: string;
}

const initialUsersData: UserData[] = [
  { id: 1, num: 1, name: "Иванов Иван Иванов", email: "e-mail_1@gmail.com" },
  { id: 2, num: 2, name: "Петров Петър Петров", email: "e-mail_2@gmail.com" },
  {
    id: 3,
    num: 3,
    name: "Сидеров Константин Сергеев",
    email: "e-mail_2@gmail.com",
  },
  {
    id: 4,
    num: 4,
    name: "Георгиев Георги Георгиев",
    email: "e-mail_3@gmail.com",
  },
  {
    id: 5,
    num: 5,
    name: "Димитров Димитър Димитров",
    email: "e-mail_4@gmail.com",
  },
  {
    id: 6,
    num: 6,
    name: "Николов Николай Николов",
    email: "e-mail_5@gmail.com",
  },
  { id: 7, num: 7, name: "Стоянов Стоян Стоянов", email: "e-mail_6@gmail.com" },
  { id: 8, num: 8, name: "Павлов Павел Павлов", email: "e-mail_7@gmail.com" },
];

function UserListComponent() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRowClick = (id: number) => {
    setSelectedUserId(id);
  };

  const filteredUsers = initialUsersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const topPadding = 12;
  const searchSectionHeight = 28 + 8;
  const tableHeaderHeight = 16 + 4;
  const firstRowOffset = 5;
  const scrollArrowTopPosition =
    topPadding + searchSectionHeight + tableHeaderHeight + firstRowOffset;

  return (
    <>
      {/* Header: Search and Actions */}
      <div className="mb-2 flex items-center justify-between">
        <div className="mr-2 flex flex-grow items-center">
          {" "}
          <span className="text-secondary mr-2 shrink-0 text-sm font-semibold">
            {" "}
            Търсене
          </span>
          <div className="relative flex w-full items-center">
            {" "}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-secondary h-7 w-full rounded-lg border-2 px-2 py-1 pr-7 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
      <div className="text-primary mb-1 flex items-center pr-2 text-xs font-bold">
        <div className="w-7 shrink-0 py-1"></div>
        <span className="w-8 shrink-0 py-1 text-center text-[15px] font-medium">
          №
        </span>
        <span className="flex-grow px-1 py-1 text-[15px] font-medium">
          Фамилия, Име, Презиме
        </span>
        <span className="w-[180px] shrink-0 px-1 py-1 text-[15px] font-medium">
          e-mail
        </span>
      </div>

      {/* Table Body */}
      <div className="custom-scrollbar min-h-0 flex-1 space-y-px overflow-y-auto pr-3">
        {filteredUsers.map((user) => {
          const isSelected = user.id === selectedUserId;

          let rowBgClass = "";
          if (isSelected) {
            rowBgClass = "bg-[#7FBB48] text-white";
          } else {
            const originalIndex = initialUsersData.findIndex(
              (u) => u.id === user.id,
            );
            if (originalIndex % 2 === 0) {
              rowBgClass = "bg-[#E7E7E7] text-black";
            } else {
              rowBgClass = "bg-white text-black";
            }
          }

          return (
            <div
              key={user.id}
              onClick={() => handleRowClick(user.id)}
              className={`flex h-[26px] cursor-pointer items-center rounded-xl text-xs ${rowBgClass} hover:bg-gray-300 ${isSelected ? "hover:text-white" : "hover:text-black"}`}
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
              <span className="w-[180px] shrink-0 truncate px-1 py-0.5">
                {user.email}
              </span>
            </div>
          );
        })}
        {filteredUsers.length === 0 && (
          <div className="py-4 text-center text-sm text-gray-500">
            Няма намерени потребители.
          </div>
        )}
      </div>
    </>
  );
}

export default UserListComponent;
