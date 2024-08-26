import { PieChart, Pie, Cell } from "recharts";
import { ChartDataProps } from "../../interfaces/ChartDataInterface";
const Piechart: React.FC<ChartDataProps> = ({ data }) => {
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
      <PieChart width={200} height={206}>
        <Pie data={data.data} outerRadius={80} fill="#8884d8" dataKey="value">
          {timelineData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default Piechart;
