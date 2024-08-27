import { useContext } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DashboardMenu from "../../components/DashboardMenu/DashboardMenu";
import { allData } from "../../assets/ChartsData";
import { AppContext } from "../../context/AppContext";
import { ChartsInterfaceProps } from "../../interfaces/ChartsInterface";
const Home = () => {
  const { charts } = useContext(AppContext);
  const defaultCharts: ChartsInterfaceProps = {
    barchart: false,
    piechart: false,
    doughnutchart: false,
    timelinechart: false,
    addwidget: false,
  };

  const getCompleteChartObject = (
    chartKey: string,
    value: boolean
  ): ChartsInterfaceProps => {
    return {
      ...defaultCharts,
      [chartKey as keyof ChartsInterfaceProps]: value,
    };
  };

  return (
    <>
      <DashboardMenu />

      {allData.map((data, index) => (
        <div key={index}>
          <span className="ms-3 fw-semibold">{data.name}</span>
          <div className="mt-3 ms-3 d-flex justify-content-around">
            {Object.entries(charts).map(([key, value]) => {
              if (value === true) {
                const chartObject = getCompleteChartObject(key, value);
                return (
                  <DashboardCard key={key} charts={chartObject} data={data} />
                );
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
