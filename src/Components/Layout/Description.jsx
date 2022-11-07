import { useEffect } from "react";
import { useState } from "react";
import BubbleSort from "../Algorithms/AlgoDesc/BubbleSort";
import MergeSort from "../Algorithms/AlgoDesc/MergeSort";
import QuickSort from "../Algorithms/AlgoDesc/QuickSort";

const Description = (props) => {
  const [algodesc, setAlgodesc] = useState(props.type);
  const [Bubblesortvisible, setBubblesortvisible] = useState(false);
  const [Mergesortvisible, setMergesortvisible] = useState(false);
  const [Quicksortvisible, setQuicksortvisible] = useState(false);
  useEffect(() => {
    setAlgodesc(props.type);
  }, [props.type]);
  useEffect(() => {
    algodesc === "BubbleSort"
      ? setBubblesortvisible(true)
      : setBubblesortvisible(false);
    algodesc === "MergeSort"
      ? setMergesortvisible(true)
      : setMergesortvisible(false);
    algodesc === "QuickSort"
      ? setQuicksortvisible(true)
      : setQuicksortvisible(false);
  }, [algodesc]);
  return (
    <div>
      {Bubblesortvisible && <BubbleSort />}
      {Mergesortvisible && <MergeSort />}
      {Quicksortvisible && <QuickSort />}
    </div>
  );
};

export default Description;
