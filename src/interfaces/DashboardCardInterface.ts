export interface DashboardCardProps {
  charts: {
    barchart: boolean;
    piechart: boolean;
    doughnutchart: boolean;
    timelinechart: boolean;
    addwidget: boolean;
  };
  data: {
    name: string;
    data: { name: string; value: number }[];
  };
}
