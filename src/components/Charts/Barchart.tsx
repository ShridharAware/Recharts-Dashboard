import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { ChartDataProps } from "../../interfaces/ChartDataInterface";
import CardCloseButton from "./CardCloseButton";

const Barchart: React.FC<ChartDataProps> = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data.data}>
          <XAxis dataKey="name" />
          <Legend />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <CardCloseButton data={"barchart"} />
    </>
  );
};

export default Barchart;
