import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartDataProps } from "../../interfaces/ChartDataInterface";
import CardCloseButton from "./CardCloseButton";

const Piechart: React.FC<ChartDataProps> = ({ data }) => {
  const timelineData = data.data.map((entry) => {
    let color;
    if (entry.value < 100) {
      color = "red";
    } else if (entry.value > 100 && entry.value < 200) {
      color = "black";
    } else if (entry.value > 200 && entry.value < 300) {
      color = "green";
    } else {
      color = "orange";
    }
    return { ...entry, color, height: 10 };
  });
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie data={data.data} outerRadius={80} fill="#8884d8" dataKey="value">
            {timelineData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <CardCloseButton data={"piechart"} />
    </>
  );
};

export default Piechart;
