"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    datasets: [
      {
        data: [20, 40, 20, 20],
        backgroundColor: ["#E30613", "#7FBB48", "#40B3E7", "#F9B03D"],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return <Pie data={data} options={options} />;
}
