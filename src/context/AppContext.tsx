import { ReactNode, createContext, useState } from "react";
import { ContextInterfaceProps } from "../interfaces/ContextInterface";
import { ChartsInterfaceProps } from "../interfaces/ChartsInterface";

export const AppContext = createContext<ContextInterfaceProps>({
  widgets: false,
  changeWidget: () => {},
  charts: {
    barchart: false,
    piechart: false,
    doughnutchart: false,
    timelinechart: false,
    addwidget: true,
  },
  changeCharts: () => {},
});

const ContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [widgets, setWidgets] = useState<boolean>(false);

  const changeWidget = () => {
    setWidgets((prev) => !prev);
  };

  const [charts, setCharts] = useState<ChartsInterfaceProps>({
    barchart: false,
    piechart: false,
    doughnutchart: false,
    timelinechart: false,
    addwidget: true,
  });

  const changeCharts = (
    chartType: keyof ChartsInterfaceProps,
    enabled: boolean
  ) => {
    setCharts((prevCharts) => ({
      ...prevCharts,
      [chartType]: enabled,
    }));
  };
  return (
    <AppContext.Provider
      value={{ widgets, changeWidget, charts, changeCharts }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
