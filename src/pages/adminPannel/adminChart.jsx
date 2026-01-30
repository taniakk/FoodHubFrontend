import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function AdminCharts() {
  // Bar Chart (Monthly Sales)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [120, 190, 300, 250, 220, 310],
        backgroundColor: "#6a8a08",
      },
    ],
  };

  // Doughnut Chart (Top Food Items)
  const doughnutData = {
    labels: ["Dosa", "Burger", "Laddu", "Pizza"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "#6a8a08",
          "#f59e0b",
          "#ef4444",
          "#3b82f6",
        ],
      },
    ],
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center">
      
      <div className="bg-white my-8 p-6 rounded-3xl shadow-xl w-full lg:w-[45%]">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Monthly Orders
        </h2>
        <Bar data={barData} />
      </div>

      <div className="bg-white p-6 my-8 rounded-3xl shadow-xl w-full lg:w-[35%]">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Top Selling Foods
        </h2>
        <Doughnut data={doughnutData} />
      </div>

    </div>
  );
}

export default AdminCharts;
