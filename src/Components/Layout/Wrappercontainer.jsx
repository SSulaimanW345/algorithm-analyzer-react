import VisualizerContainer from "./VisualizerContainer";
import Steps from "./Steps";
import Description from "./Description";
const Wrappercontainer = (props) => {
  console.log(props.type);
  console.log(props.arr);
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        <VisualizerContainer type={props.type} arr={props.arr} />
        <Steps type={props.type} arr={props.arr} />
      </div>
    </div>
  );
};
export default Wrappercontainer;
