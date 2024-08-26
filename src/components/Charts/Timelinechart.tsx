import { BarChart, Bar, Cell } from "recharts";
import { ChartDataProps } from "../../interfaces/ChartDataInterface";

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
      <BarChart
        width={200}
        height={206}
        data={timelineData}
        barCategoryGap={0}
        barGap={0}
      >
        <Bar dataKey="height">
          {timelineData.map((entry) => (
            <Cell fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default Timelinechart;
