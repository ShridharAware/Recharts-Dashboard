import { ChartsInterfaceProps } from "./ChartsInterface";

export interface ContextInterfaceProps {
  widgets: boolean;
  changeWidget: () => void;
  charts: {
    barchart: boolean;
    piechart: boolean;
    doughnutchart: boolean;
    timelinechart: boolean;
  };
  changeCharts: (chartType: keyof ChartsInterfaceProps) => void;
}
