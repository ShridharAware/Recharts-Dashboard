import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
} from "recharts";
import { ChartDataProps } from "../../interfaces/ChartDataInterface";
import CardCloseButton from "./CardCloseButton";

const Timelinechart: React.FC<ChartDataProps> = ({ data }) => {
  const timelineData = data.data.map((entry) => {
    let color;
    if (entry.value < 100) {
      color = "red";
    } else if (entry.value > 100 && entry.value < 200) {
      color = "yellow";
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
        <BarChart data={timelineData} barCategoryGap={0} barGap={0}>
          <XAxis dataKey="name" />
          <Legend />
          <Tooltip />
          <Bar dataKey="height">
            {timelineData.map((entry) => (
              <Cell fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <CardCloseButton data={"timelinechart"} />
    </>
  );
};

export default Timelinechart;
