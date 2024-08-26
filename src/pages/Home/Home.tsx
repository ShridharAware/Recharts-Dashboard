import { useState } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DashboardMenu from "../../components/DashboardMenu/DashboardMenu";
import { allData } from "../../assets/ChartsData";

type ChartType =
  | "barchart"
  | "doughnutchart"
  | "piechart"
  | "timelinechart"
  | "addwidget";

const Home = () => {
  const [charts, setCharts] = useState<ChartType[]>([
    "doughnutchart",
    "piechart",
    "addwidget",
  ]);

  return (
    <>
      <DashboardMenu />

      {allData.map((data, index) => (
        <div>
          <span className="ms-3 fw-semibold ">{data.name}</span>
          <div className="mt-3 ms-3 d-flex justify-content-around " key={index}>
            {charts.map((entry, index) => (
              <DashboardCard key={index} charts={entry} data={data} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
