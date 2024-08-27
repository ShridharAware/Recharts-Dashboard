import { useContext } from "react";
import styles from "./DashboardMenu.module.css";
import { Button, Form } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { SlRefresh, SlMenu } from "react-icons/sl";
const DashboardMenu = () => {
  const { changeWidget } = useContext(AppContext);
  return (
    <>
      <div className={`d-flex align-items-center ${styles.homeContainer}`}>
        <div className="p-2 flex-grow-1 fw-bold mx-2">CNAPP Dashboard</div>
        <Button
          variant="outline-dark"
          style={{ width: "120px" }}
          className="d-flex justify-content-center align-items-center"
          onClick={changeWidget}
        >
          Add Widget
        </Button>
        <div className="p-2">
          <SlRefresh size="20" />
        </div>
        <div className="p-2">
          <SlMenu />
        </div>
        <div className={`p-2 ${styles.rightMargin}`}>
          <Form.Select>
            <option value="1">Select 1</option>
            <option value="2">Select 2</option>
          </Form.Select>
        </div>
      </div>
    </>
  );
};

export default DashboardMenu;
