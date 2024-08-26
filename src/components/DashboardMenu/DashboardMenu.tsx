import { useContext } from "react";
import styles from "./DashboardMenu.module.css";
import { Form } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
const DashboardMenu = () => {
  const { changeWidget } = useContext(AppContext);
  return (
    <>
      <div className={`d-flex align-items-center ${styles.homeContainer}`}>
        <div className="p-2 flex-grow-1 fw-bold mx-2">CNAPP Dashboard</div>
        <div className="p-2" onClick={changeWidget}>
          Add Widget
        </div>
        <div className="p-2">Refresh</div>
        <div className="p-2">Menu</div>
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
