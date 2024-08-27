import { Card, CloseButton, Form, InputGroup } from "react-bootstrap";
import styles from "./WidgetsChecklist.module.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ChartsInterfaceProps } from "../../interfaces/ChartsInterface";

const WidgetsChecklist = () => {
  const { changeWidget, charts, changeCharts } = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    Object.entries(data).forEach(([key, value]) => {
      if (isKeyOfChartsInterfaceProps(key)) {
        const isChecked = value === "on";
        changeCharts(key as keyof ChartsInterfaceProps, isChecked);
      }
    });
  };

  const isKeyOfChartsInterfaceProps = (
    key: string
  ): key is keyof ChartsInterfaceProps => {
    return [
      "barchart",
      "piechart",
      "doughnutchart",
      "timelinechart",
      "addwidget",
    ].includes(key);
  };

  const handleCheckboxChange = (key: keyof ChartsInterfaceProps) => {
    const currentState = charts[key];
    changeCharts(key, !currentState);
  };

  return (
    <div className={styles.widgetForm}>
      <div>
        <div className="p-2 bg-primary fw-semibold"> Add Widget</div>
        <div className="position-absolute top-0 end-0 m-2">
          <CloseButton onClick={changeWidget} />
        </div>
      </div>
      <div className={`${styles.bgWhite} ${styles.msg}`}>
        Personalize your dashboard by adding the following widgets
      </div>

      <Card className={`mt-5 mx-auto ${styles.bgWhite}`}>
        <Card.Body className={`${styles.bgWhite}`}>
          <Card.Title className={`${styles.bgWhite}`}>
            Select widgets to put on dashboard
          </Card.Title>
          <Form onSubmit={handleSubmit} className="mt-5">
            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                name="barchart"
                checked={charts.barchart}
                onChange={() => handleCheckboxChange("barchart")}
              />
              <Form.Label className="mx-3 my-auto">Barchart</Form.Label>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                name="doughnutchart"
                checked={charts.doughnutchart}
                onChange={() => handleCheckboxChange("doughnutchart")}
              />
              <Form.Label className="mx-3 my-auto">Doughnutchart</Form.Label>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                name="piechart"
                checked={charts.piechart}
                onChange={() => handleCheckboxChange("piechart")}
              />
              <Form.Label className="mx-3 my-auto">Piechart</Form.Label>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                name="timelinechart"
                checked={charts.timelinechart}
                onChange={() => handleCheckboxChange("timelinechart")}
              />
              <Form.Label className="mx-3 my-auto">Timelinechart</Form.Label>
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WidgetsChecklist;
