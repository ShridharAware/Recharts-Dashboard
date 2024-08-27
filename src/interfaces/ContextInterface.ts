import { ChartsInterfaceProps } from "./ChartsInterface";

export interface ContextInterfaceProps {
  widgets: boolean;
  changeWidget: () => void;
  charts: {
    barchart: boolean;
    piechart: boolean;
    doughnutchart: boolean;
    timelinechart: boolean;
    addwidget: boolean;
  };
  changeCharts: (
    chartType: keyof ChartsInterfaceProps,
    enabled: boolean
  ) => void;
}
