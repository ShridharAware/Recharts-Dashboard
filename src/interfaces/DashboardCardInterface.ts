export interface DashboardCardProps {
  charts:
    | "barchart"
    | "doughnutchart"
    | "piechart"
    | "timelinechart"
    | "addwidget";
  data: {
    name: string;
    data: { name: string; value: number }[];
  };
}
