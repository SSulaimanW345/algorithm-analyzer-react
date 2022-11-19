import VisualizerContainer from "./VisualizerContainer";
import Steps from "./Steps";
import Description from "./Description";
import { useState } from "react";
const Wrappercontainer = (props) => {
  const [sortData, setsortData] = useState("");
  console.log(props.type);
  console.log(props.arr);
  const recvdataHandler = (array) => {
    setsortData(array);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex" style={{ width: "100%" }}>
        <VisualizerContainer
          type={props.type}
          arr={props.arr}
          invokePropHandler={recvdataHandler}
        />
        <Steps type={props.type} arr={props.arr} data={sortData} />
      </div>
    </div>
  );
};
export default Wrappercontainer;
