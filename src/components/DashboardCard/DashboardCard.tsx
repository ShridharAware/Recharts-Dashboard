import Barchart from "../Charts/Barchart";
import Doughnutchart from "../Charts/Doughnutchart";
import Piechart from "../Charts/Piechart";
import Timelinechart from "../Charts/Timelinechart";
import styles from "./DashboardCard.module.css";
import { Button, Card, CloseButton } from "react-bootstrap";
import { DashboardCardProps } from "../../interfaces/DashboardCardInterface";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const DashboardCard: React.FC<DashboardCardProps> = ({ charts, data }) => {
  const { changeWidget } = useContext(AppContext);
  return (
    <div className={styles.card}>
      <Card className="d-flex h-100 w-100 position-relative">
        {charts != "addwidget" && (
          <div className="position-absolute top-0 end-0 m-2">
            <CloseButton />
          </div>
        )}
        {charts === "barchart" && <Barchart data={data} />}
        {charts === "doughnutchart" && <Doughnutchart data={data} />}
        {charts === "piechart" && <Piechart data={data} />}
        {charts === "timelinechart" && <Timelinechart data={data} />}
        {charts === "addwidget" && (
          <div
            className="d-flex justify-content-center align-items-center h-100"
            style={{ backgroundColor: "white" }}
          >
            <Button
              variant="outline-dark"
              style={{ width: "150px" }}
              className="d-flex justify-content-center align-items-center"
              onClick={changeWidget}
            >
              Add Widget
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default DashboardCard;
