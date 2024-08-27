import { useContext } from "react";
import { CloseButton } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { CardCloseButtonProps } from "../../interfaces/CardCloseButtonInterface";
const CardCloseButton: React.FC<CardCloseButtonProps> = ({ data }) => {
  const { changeCharts } = useContext(AppContext);
  return (
    <div className="position-absolute top-0 end-0 m-2">
      <CloseButton
        onClick={() => {
          changeCharts(data, false);
        }}
      />
    </div>
  );
};

export default CardCloseButton;
