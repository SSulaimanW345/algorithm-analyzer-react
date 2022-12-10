import BubbleSortProc from "../Algorithms/AlgoProcedure/BubbleSortProc";
import BucketSortProc from "../Algorithms/AlgoProcedure/BucketSortProc";
import CountSortProc from "../Algorithms/AlgoProcedure/CountSortProc";
import HeapSortProc from "../Algorithms/AlgoProcedure/HeapSortProc";
import InsertionSortProc from "../Algorithms/AlgoProcedure/InsertionSortProc";
import MergeSortProc from "../Algorithms/AlgoProcedure/MergeSortProc";
import QuickSortProc from "../Algorithms/AlgoProcedure/QuickSortProc";
import RadixSortProc from "../Algorithms/AlgoProcedure/RadixSortProc";
import { useState, useEffect } from "react";
import CountElementsproc from "../Algorithms/AlgoProcedure/CountElementsproc";
import ModifiedQuickSortProc from "../Algorithms/AlgoProcedure/ModifiedQuickSortProc";
import "./Steps.css";
const Steps = (props) => {
  console.log(props.type);
  console.log(props.arr);
  const [algoproc, setAlgoproc] = useState(props.type);
  const [Bubblesortvisible, setBubblesortvisible] = useState(false);
  const [Mergesortvisible, setMergesortvisible] = useState(false);
  const [ModifiedQuicksortvisible, setModifiedQuicksortvisible] =
    useState(false);
  const [Countelementsvisible, setCountelementsvisible] = useState(false);
  const [Quicksortvisible, setQuicksortvisible] = useState(false);
  const [Radixsortvisible, setRadixsortvisible] = useState(false);
  const [Countsortvisible, setCountsortvisible] = useState(false);
  const [Bucketsortvisible, setBucketsortvisible] = useState(false);
  const [Insertionsortvisible, setInsertionsortvisible] = useState(false);
  const [Heapsortvisible, setHeapsortvisible] = useState(false);
  useEffect(() => {
    setAlgoproc(props.type);
  }, [props.type]);
  useEffect(() => {
    algoproc === "BubbleSort"
      ? setBubblesortvisible(true)
      : setBubblesortvisible(false);
    algoproc === "MergeSort"
      ? setMergesortvisible(true)
      : setMergesortvisible(false);
    algoproc === "QuickSort"
      ? setQuicksortvisible(true)
      : setQuicksortvisible(false);
    algoproc === "BucketSort"
      ? setBucketsortvisible(true)
      : setBucketsortvisible(false);
    algoproc === "RadixSort"
      ? setRadixsortvisible(true)
      : setRadixsortvisible(false);
    algoproc === "CountSort"
      ? setCountsortvisible(true)
      : setCountsortvisible(false);
    algoproc === "HeapSort"
      ? setHeapsortvisible(true)
      : setHeapsortvisible(false);
    algoproc === "ModifiedQuickSort"
      ? setModifiedQuicksortvisible(true)
      : setModifiedQuicksortvisible(false);
    algoproc === "CountElements"
      ? setCountelementsvisible(true)
      : setCountelementsvisible(false);
    algoproc === "InsertionSort"
      ? setInsertionsortvisible(true)
      : setInsertionsortvisible(false);
  }, [algoproc]);
  return (
    <div className="col-4 text-left VisualizerContainer">
      <h1>{props.type}</h1>
      {Bubblesortvisible && <BubbleSortProc stepData={props.data} />}
      {Mergesortvisible && <MergeSortProc stepData={props.data} />}
      {Quicksortvisible && <QuickSortProc stepData={props.data} />}
      {Radixsortvisible && <RadixSortProc stepData={props.data} />}
      {Bucketsortvisible && <BucketSortProc stepData={props.data} />}
      {Insertionsortvisible && <InsertionSortProc stepData={props.data} />}
      {Countsortvisible && <CountSortProc stepData={props.data} />}
      {Heapsortvisible && <HeapSortProc stepData={props.data} />}
      {ModifiedQuicksortvisible && (
        <ModifiedQuickSortProc stepData={props.data} />
      )}
      {Countelementsvisible && <CountElementsproc stepData={props.data} />}
    </div>
  );
};

export default Steps;
