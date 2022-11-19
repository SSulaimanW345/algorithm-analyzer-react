import { useEffect } from "react";
import { useState } from "react";
import BubbleSort from "../Algorithms/AlgoDesc/BubbleSort";
import BucketSort from "../Algorithms/AlgoDesc/BucketSort";
import CountSort from "../Algorithms/AlgoDesc/CountSort";
import HeapSort from "../Algorithms/AlgoDesc/HeapSort";
import InsertionSort from "../Algorithms/AlgoDesc/InsertionSort";
import MergeSort from "../Algorithms/AlgoDesc/MergeSort";
import QuickSort from "../Algorithms/AlgoDesc/QuickSort";
import RadixSort from "../Algorithms/AlgoDesc/RadixSort";

const Description = (props) => {
  const [algodesc, setAlgodesc] = useState(props.type);
  const [Bubblesortvisible, setBubblesortvisible] = useState(false);
  const [Mergesortvisible, setMergesortvisible] = useState(false);
  const [Quicksortvisible, setQuicksortvisible] = useState(false);
  const [Radixsortvisible, setRadixsortvisible] = useState(false);
  const [Countsortvisible, setCountsortvisible] = useState(false);
  const [Bucketsortvisible, setBucketsortvisible] = useState(false);
  const [Insertionsortvisible, setInsertionsortvisible] = useState(false);
  const [Heapsortvisible, setHeapsortvisible] = useState(false);
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
    algodesc === "BucketSort"
      ? setBucketsortvisible(true)
      : setBucketsortvisible(false);
    algodesc === "RadixSort"
      ? setRadixsortvisible(true)
      : setRadixsortvisible(false);
    algodesc === "CountSort"
      ? setCountsortvisible(true)
      : setCountsortvisible(false);
    algodesc === "HeapSort"
      ? setHeapsortvisible(true)
      : setHeapsortvisible(false);
    algodesc === "InsertionSort"
      ? setInsertionsortvisible(true)
      : setInsertionsortvisible(false);
  }, [algodesc]);
  return (
    <div>
      {Bubblesortvisible && <BubbleSort />}
      {Mergesortvisible && <MergeSort />}
      {Quicksortvisible && <QuickSort />}
      {Radixsortvisible && <RadixSort />}
      {Bucketsortvisible && <BucketSort />}
      {Insertionsortvisible && <InsertionSort />}
      {Countsortvisible && <CountSort />}
      {Heapsortvisible && <HeapSort />}
    </div>
  );
};

export default Description;
