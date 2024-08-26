import { BarChart, Bar } from "recharts";
import { ChartDataProps } from "../../interfaces/ChartDataInterface";

const Barchart: React.FC<ChartDataProps> = ({ data }) => {
  return (
    <>
      <BarChart width={200} height={206} data={data.data}>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default Barchart;
