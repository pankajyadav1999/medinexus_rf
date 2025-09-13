import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const cardData = [
    { title: "Total Patients", value: 120 },
    { title: "Total Doctors", value: 25 },
    { title: "Appointments Today", value: 15 },
    { title: "Revenue", value: "$5,000" }
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patients Admitted",
        data: [12, 19, 10, 14, 18, 20],
        backgroundColor: "rgba(75,192,192,0.6)"
      }
    ]
  };

  return (
    <MainLayout>
      <h2>Hospital Dashboard</h2>
      <div className="dashboard-cards">
        {cardData.map((card, idx) => (
          <div key={idx} className="dashboard-card">
            <h4>{card.title}</h4>
            <p>{card.value}</p>
          </div>
        ))}
      </div>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </MainLayout>
  );
}
