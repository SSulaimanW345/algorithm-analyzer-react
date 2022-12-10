import { useState, Fragment } from "react";
import mainicon from "../../assests/mainicon.webp";
import Menu from "../UI/Menu";
import FileInput from "../UI/FileInput";
import Button from "../UI/Button";
const Header = (props) => {
  const algorithms = [
    { title: "MergeSort" },
    { title: "QuickSort" },
    { title: "InsertionSort" },
    { title: "BubbleSort" },
    // { title: "SelectionSort" },
    { title: "HeapSort" },
    { title: "BucketSort" },
    { title: "RadixSort" },
    { title: "CountSort" },
    { title: "ModifiedQuickSort" },
    { title: "CountElements" },
  ];
  const onSelecthandler = (algotype) => {
    console.log(algotype);
    props.onChangeAlgo(algotype);
  };
  const sendNumberarrayhandler = (array) => {
    props.onSendarr(array);
  };
  const onClickHandler = () => {
    props.onResetarr();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={mainicon} width="50" height="50" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <FileInput sendNumberarray={sendNumberarrayhandler} />
          <Menu items={algorithms} onSelecthandler={onSelecthandler} />

          <Button onClick={onClickHandler}>Generate new array</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
