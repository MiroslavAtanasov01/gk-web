export function getFormattedDateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString("bg-BG", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString("bg-BG", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return { time, date };
}

export const parseDateString = (dateStr: string): Date | null => {
  const parts = dateStr.match(/(\d{2})\.(\d{2})\.(\d{4})/);
  if (parts) {
    return new Date(
      parseInt(parts[3]),
      parseInt(parts[2]) - 1,
      parseInt(parts[1]),
    );
  }
  return null;
};

export const formatDateToDayKey = (date: Date): string => {
  // Format to "YYYY-MM-DD" for easy comparison
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};
