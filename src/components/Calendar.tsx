"use client";

import React from "react";
import Image from "next/image";
import { formatDateToDayKey } from "@/utils/getDateTime";

type EventMap = Record<string, { start?: boolean; end?: boolean }>;

type CalendarProps = {
  currentDate: Date;
  onMonthChange: (offset: number) => void;
  events: EventMap;
};

const StarIcon = (color: string) => (
  <Image src={`/images/${color}-star.svg`} alt="star" width={20} height={20} />
);

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  onMonthChange,
  events,
}) => {
  const monthNames = [
    "ЯНУАРИ",
    "ФЕВРУАРИ",
    "МАРТ",
    "АПРИЛ",
    "МАЙ",
    "ЮНИ",
    "ЮЛИ",
    "АВГУСТ",
    "СЕПТЕМВРИ",
    "ОКТОМВРИ",
    "НОЕМВРИ",
    "ДЕКЕМВРИ",
  ];
  const dayHeaders = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const numDays = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-1" />);
  }

  for (let day = 1; day <= numDays; day++) {
    const dateKey = formatDateToDayKey(new Date(year, month, day));
    const event = events[dateKey];
    const isToday =
      new Date().toDateString() === new Date(year, month, day).toDateString();

    calendarDays.push(
      <div
        key={day}
        className={`relative flex items-center justify-center p-1 ${
          isToday ? "bg-blue-100" : ""
        }`}
      >
        <span className="z-10 mr-1 text-3xl">{day}</span>
        <div className="absolute right-1 flex">
          {event?.start && StarIcon("red")}
          {event?.end && StarIcon("green")}
        </div>
      </div>,
    );
  }

  return (
    <>
      {/* Header */}
      <div className="bg-primary flex h-25 items-center justify-between rounded-t-lg px-1 py-2 text-white">
        <button onClick={() => onMonthChange(-1)} className="ml-15 p-2">
          <Image
            src="/images/left-arrow.svg"
            alt="prev"
            width={25}
            height={40}
          />
        </button>
        <h3 className="text-5xl">
          {monthNames[month]}, {year}
        </h3>
        <button onClick={() => onMonthChange(1)} className="mr-15 p-2">
          <Image
            src="/images/right-arrow.svg"
            alt="next"
            width={25}
            height={40}
          />
        </button>
      </div>

      {/* Grid */}
      <div className="grid flex-grow grid-cols-7">
        {dayHeaders.map((header) => (
          <div
            key={header}
            className="text-secondary py-5 text-center text-4xl font-bold"
          >
            {header}
          </div>
        ))}
        {calendarDays}
      </div>
    </>
  );
};

export default Calendar;
