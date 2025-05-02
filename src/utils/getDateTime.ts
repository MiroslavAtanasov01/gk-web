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
