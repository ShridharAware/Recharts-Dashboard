import { Button, Card, CloseButton, Nav } from "react-bootstrap";
import styles from "./WidgetsChecklist.module.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const WidgetsChecklist = () => {
  const { changeWidget } = useContext(AppContext);
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

      <Card className={`mt-5 w-75 mx-auto ${styles.bgWhite}`}>
        <Card.Header className={`${styles.bgWhite}`}>
          <Nav variant="tabs" className={`${styles.bgWhite}`}>
            <Nav.Item className={`${styles.bgWhite}`}>
              <Nav.Link>CSPM</Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${styles.bgWhite}`}>
              <Nav.Link>CWPP</Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${styles.bgWhite}`}>
              <Nav.Link>Registery Scan</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className={`${styles.bgWhite}`}>
          <Card.Title className={`${styles.bgWhite}`}>
            Special title treatment
          </Card.Title>
          <Card.Text className={`${styles.bgWhite}`}>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WidgetsChecklist;
