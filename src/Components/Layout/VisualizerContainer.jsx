import React, { Component, useState } from "react";
import "./VisualizerContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getBubbleSortAnimations,
  getBucketSortAnimations,
  getCountElementsAnimations,
  getCountingSortAnimations,
  getHeapSortAnimations,
  getInsertionSortAnimations,
  getMergeSortAnimations,
  getOptimizedQuickSortAnimations,
  getQuickSortAnimations,
  getRadixSortAnimations,
} from "../Algorithms/AlgoAnimations/AlgoAnimations.js";
import Button from "../UI/Button";
var ANIMATION_SPEED_MS = 150;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 20;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
export default class VisualizerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialarray: [],
      array: [],
      type: props.type,
      trace: [],
      timeoutIds: [],
      animations: [],
      lastPos: -1,
      play: 0,
      execTime: 0,
    };
  }

  componentDidMount() {
    this.resetArray();
    console.log("executedmount");
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.type !== prevProps.type) {
      this.setState({ type: this.props.type });
      this.resetArray();
      this.clearTimeouts();
      this.setState((state, props) => ({ lastPos: -1 }));
    }
    if (this.props.arr !== prevProps.arr) {
      this.setState({ array: this.props.arr });
      this.setState({ type: this.props.type });
      //this.resetArray();
      this.clearTimeouts();
      this.setState((state, props) => ({ lastPos: -1 }));
    }
    if (this.state.array != prevState.array) {
      this.setState({ array: this.state.array });
      console.log("executed array");
    }
    if (this.state.timeoutIds != prevState.timeoutIds) {
      this.setState({ timeoutIds: this.state.timeoutIds });
      console.log("execueted timeout");
    }
    if (this.state.lastPos != prevState.lastPos) {
      this.setState({ lastPos: this.state.lastPos });
      console.log("executed " + this.state.lastPos);
    }
    if (this.state.lastPosSec != prevState.lastPosSec) {
      this.setState({ lastPos: this.state.lastPosSec });
      console.log("executed " + this.state.lastPosSec);
    }
    if (this.state.animations != prevState.animations) {
      this.setState({ animations: this.state.animations });
      console.log("executed animations ");
    }
    if (this.state.play != prevState.play) {
      this.setState({ play: this.state.play });
      console.log("executed animations ");
    }
    if (this.state.execTime != prevState.execTime) {
      this.setState({ execTime: this.state.execTime });
      console.log("executed execTime ");
    }
  }

  resetArray() {
    const array = [];
    const initialarray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      let num = randomIntFromInterval(5, 410);
      array.push(num);
      initialarray.push(num);
    }
    this.setState({ array });
    this.setState({ initialarray });
  }
  updateArray() {
    const array = [];
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(parseFloat(arrayBars[i].style.height));
    }
    this.setState({ array });
  }
  clearTimeouts = () => {
    this.state.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    this.setState({ timeoutIds: [] });
  };
  clearTimeoutsCompletion = () => {
    this.setState({ play: !this.state.play });
    this.state.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    this.setState({ timeoutIds: [] });
    // this.setState({ lastPos: -1 });
  };
  pause = (opt) => {
    this.setState({ play: !this.state.play });
    this.clearTimeouts();
    if (opt == 1) {
      if (this.props.type == "BubbleSort") this.bubbleSort(1);
      else if (this.props.type == "RadixSort") this.radixSort(1);
      else if (this.props.type == "MergeSort") this.mergeSort(1);
      else if (this.props.type == "QuickSort") this.quickSort(1);
      else if (this.props.type == "InsertionSort") this.insertionSort(1);
      else if (this.props.type == "BucketSort") this.bucketSort(1);
      else if (this.props.type == "CountSort") this.countSort(1);
      else if (this.props.type == "HeapSort") this.heapSort(1);
      else if (this.props.type == "ModifiedQuickSort")
        this.ModifiedquickSort(1);
      else if (this.props.type == "CountElements") this.countElements(1);
    }
    // else if (opt == 2) {
    //   if (this.props.type == "BubbleSort") this.bubbleSort(2);
    //   else if (this.props.type == "RadixSort") this.radixSort(2);
    //   else if (this.props.type == "MergeSort") this.mergeSort(2);
    //   else if (this.props.type == "QuickSort") this.quickSort(2);
    //   else if (this.props.type == "InsertionSort") this.insertionSort(2);
    //   else if (this.props.type == "BucketSort") this.bucketSort(2);
    //   else if (this.props.type == "CountSort") this.countSort(2);
    // }
  };
  run() {
    this.setState({ play: !this.state.play });
    if (this.props.type == "BubbleSort") this.bubbleSort(0);
    else if (this.props.type == "RadixSort") this.radixSort(0);
    else if (this.props.type == "MergeSort") this.mergeSort(0);
    else if (this.props.type == "QuickSort") this.quickSort(0);
    else if (this.props.type == "InsertionSort") this.insertionSort(0);
    else if (this.props.type == "BucketSort") this.bucketSort(0);
    else if (this.props.type == "CountSort") this.countSort(0);
    else if (this.props.type == "HeapSort") this.heapSort(0);
    else if (this.props.type == "ModifiedQuickSort") this.ModifiedquickSort(0);
    else if (this.props.type == "CountElements") this.countElements(0);
  }
  resetProblem() {
    //this.setState({ array: this.state.initialarray });
    this.clearTimeouts();
    this.setState((state, props) => ({ lastPos: -1 }));
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
    }
    this.setState({ animations: [] });
  }

  mergeSort(a) {
    let animations = [];
    //const start = performance.now();
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getMergeSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    //const [passes] = animations[0];
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    else if (a == 2) {
      /*this.setState((state, props) => ({ lastPos: state.lastPos - 2 }));
      console.log("backecexecuted!!!!!!!");
      loopEnd = i;
      i = this.st;
      console.log(i + " to  backecexecuted!!!!!!! " + loopEnd);*/
    }
    console.log(ANIMATION_SPEED_MS);
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          this.updateArray();
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          this.updateArray();
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);

    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }

  quickSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getQuickSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx, barThirdIdx, pivot] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barThirdStyle =
          barThirdIdx >= 0 ? arrayBars[barThirdIdx].style : -1;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        const colorThird = i % 3 === 0 ? "yellow" : PRIMARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (barThirdStyle != -1) barThirdStyle.backgroundColor = colorThird;
          this.updateArray();
          this.props.invokePropHandler([
            barOneIdx,
            barTwoIdx,
            this.state.array[barOneIdx],
            this.state.array[barTwoIdx],
            color,
            0,
            this.state.array[pivot],
            pivot,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight, barTwoIdx, newHeightTwo, pivot] =
          animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
          this.updateArray();
          this.props.invokePropHandler([
            barOneIdx,
            barTwoIdx,
            this.state.array[barOneIdx],
            this.state.array[barTwoIdx],
            barOneStyle.backgroundColor,
            1,
            this.state.array[pivot],
            pivot,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  ModifiedquickSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getOptimizedQuickSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [firstVar] = animations[i];
      if (firstVar == 0) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [funcUsed, barOneIdx, barTwoIdx, barThirdIdx, pivot] =
            animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const barThirdStyle =
            barThirdIdx >= 0 ? arrayBars[barThirdIdx].style : -1;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          const colorThird = i % 3 === 0 ? "yellow" : PRIMARY_COLOR;
          timeoutId = setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            if (barThirdStyle != -1) barThirdStyle.backgroundColor = colorThird;
            this.updateArray();
            this.props.invokePropHandler([
              funcUsed,
              barOneIdx,
              barTwoIdx,
              this.state.array[barOneIdx],
              this.state.array[barTwoIdx],
              color,
              0,
              this.state.array[pivot],
              pivot,
            ]);
            this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          }, timeDelay * ANIMATION_SPEED_MS);
        } else {
          const [
            funcUsed,
            barOneIdx,
            newHeight,
            barTwoIdx,
            newHeightTwo,
            pivot,
          ] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          timeoutId = setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
            barTwoStyle.height = `${newHeightTwo}px`;
            this.updateArray();
            this.props.invokePropHandler([
              funcUsed,
              barOneIdx,
              barTwoIdx,
              this.state.array[barOneIdx],
              this.state.array[barTwoIdx],
              barOneStyle.backgroundColor,
              1,
              this.state.array[pivot],
              pivot,
            ]);
            this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          }, timeDelay * ANIMATION_SPEED_MS);
        }
      } else {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [funcUsed, barOneIdx, barTwoIdx, keyvalue] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          timeoutId = setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            this.updateArray();
            this.props.invokePropHandler([
              funcUsed,
              0,
              barOneIdx,
              barTwoIdx,
              keyvalue,
              this.state.array[barTwoIdx],
              barOneStyle.backgroundColor,
            ]);
            this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          }, timeDelay * ANIMATION_SPEED_MS);
        } else {
          const [funcUsed, barOneIdx, newHeight, key, keyHeight] =
            animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          timeoutId = setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
            this.updateArray();
            this.props.invokePropHandler([
              funcUsed,
              1,
              barOneIdx,
              key,
              newHeight,
              key,
              keyHeight,
            ]);
            this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          }, timeDelay * ANIMATION_SPEED_MS);
        }
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  insertionSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getInsertionSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    const arrlength = this.state.array.length;
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx, keyvalue] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          this.updateArray();
          this.props.invokePropHandler([
            0,
            barOneIdx,
            barTwoIdx,
            keyvalue,
            this.state.array[barTwoIdx],
            barOneStyle.backgroundColor,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight, key, keyHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          this.updateArray();
          this.props.invokePropHandler([
            1,
            barOneIdx,
            key,
            newHeight,
            key,
            keyHeight,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  countSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getCountingSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    const arrlength = this.state.array.length;
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i < 2 * arrlength;
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 1) % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          this.props.invokePropHandler([
            0,
            barOneIdx,
            this.state.array[barOneIdx],
            color,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          //barTwoStyle.backgroundColor = color;
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight, prev] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          //barTwoStyle.height = `${newHeight2}px`;
          this.updateArray();
          this.props.invokePropHandler([
            1,
            barOneIdx,
            newHeight,
            prev,
            barOneStyle.backgroundColor,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  countElements(a) {
    let animations = [];
    let firstNum = 40;
    let secondNum = 100;
    if (this.state.animations.length == 0) {
      const start = performance.now();

      animations = getCountElementsAnimations(
        this.state.array,
        firstNum,
        secondNum
      );
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    const arrlength = this.state.array.length;
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i < 2 * arrlength;
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 1) % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          this.props.invokePropHandler([
            0,
            barOneIdx,
            this.state.array[barOneIdx],
            color,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          //barTwoStyle.backgroundColor = color;
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        if (i < 3 * arrlength) {
          const [barOneIdx, newHeight, prev] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          //const barTwoStyle = arrayBars[barTwoIdx].style;
          timeoutId = setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
            //barTwoStyle.height = `${newHeight2}px`;
            this.updateArray();
            this.props.invokePropHandler([
              1,
              barOneIdx,
              newHeight,
              prev,
              barOneStyle.backgroundColor,
            ]);
            this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          }, timeDelay * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx, count] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          //const barTwoStyle = arrayBars[barTwoIdx].style;
          timeoutId = setTimeout(() => {
            //barOneStyle.height = `${newHeight}px`;
            //barTwoStyle.height = `${newHeight2}px`;
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            this.updateArray();
            this.props.invokePropHandler([2, count, firstNum, secondNum]);
            this.setState((state, props) => ({ lastPos: state.lastPos }));
          }, timeDelay * ANIMATION_SPEED_MS);
        }
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  radixSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getRadixSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    const arrlength = this.state.array.length;
    console.log("I am good");
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    //const [passes] = animations[0];
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    else if (a == 2) {
      /*this.setState((state, props) => ({ lastPos: state.lastPos - 2 }));
      console.log("backecexecuted!!!!!!!");
      loopEnd = i;
      i = this.st;
      console.log(i + " to  backecexecuted!!!!!!! " + loopEnd);*/
    }
    console.log(animations);
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      let timeoutId;
      const isColorChange = animations[i].length === 3;

      if (isColorChange) {
        const [barOneIdx, pass, place] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 2) % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        console.log(i);
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          //this.updateArray();
          this.props.invokePropHandler([
            0,
            barOneIdx,
            Math.floor(this.state.array[barOneIdx] / place) % 10,
            //this.state.array[barOneIdx],
            color,
            pass,
            place,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          //barTwoStyle.backgroundColor = color;
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight, prev, pass, place] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          this.updateArray();
          this.props.invokePropHandler([
            1,
            barOneIdx,
            newHeight,
            prev,
            barOneStyle.backgroundColor,
            pass,
            place,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          //barTwoStyle.height = `${newHeight2}px`;
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  heapSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();

      animations = getHeapSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    //const [passes] = animations[0];
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    else if (a == 2) {
      /*this.setState((state, props) => ({ lastPos: state.lastPos - 2 }));
      console.log("backecexecuted!!!!!!!");
      loopEnd = i;
      i = this.st;
      console.log(i + " to  backecexecuted!!!!!!! " + loopEnd);*/
    }
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          this.updateArray();
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
          this.updateArray();
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }

  bubbleSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();

      animations = getBubbleSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    //const [passes] = animations[0];
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    else if (a == 2) {
      /*this.setState((state, props) => ({ lastPos: state.lastPos - 2 }));
      console.log("backecexecuted!!!!!!!");
      loopEnd = i;
      i = this.st;
      console.log(i + " to  backecexecuted!!!!!!! " + loopEnd);*/
    }
    console.log(ANIMATION_SPEED_MS);
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      let timeoutId;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          //this.props.invokePropHandler([barOneIdx, barTwoIdx]);
          this.updateArray();
          this.props.invokePropHandler([
            barOneIdx,
            barTwoIdx,
            this.state.array[barOneIdx],
            this.state.array[barTwoIdx],
            color,
            0,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
          this.updateArray();
          this.props.invokePropHandler([
            barOneIdx,
            barTwoIdx,
            this.state.array[barOneIdx],
            this.state.array[barTwoIdx],
            barOneStyle.backgroundColor,
            1,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  bucketSort(a) {
    let animations = [];
    if (this.state.animations.length == 0) {
      const start = performance.now();
      animations = getBucketSortAnimations(this.state.array);
      const end = performance.now();
      this.setState({ execTime: (end - start).toFixed(4) });
    }
    const arrlength = this.state.array.length;
    if (animations.length != 0) this.setState({ animations });
    const timeoutIds = [];
    let timeDelay = 0;
    let i = this.state.lastPos + 1;
    let timeoutId;
    //const [passes] = animations[0];
    console.log(i);
    if (i != 0) animations = this.state.animations;
    let loopEnd =
      this.state.lastPos == -1
        ? animations.length
        : this.state.animations.length;
    if (a == 1) loopEnd = i + 1;
    else if (a == 2) {
      /*this.setState((state, props) => ({ lastPos: state.lastPos - 2 }));
      console.log("backecexecuted!!!!!!!");
      loopEnd = i;
      i = this.st;
      console.log(i + " to  backecexecuted!!!!!!! " + loopEnd);*/
    }
    for (i; i < loopEnd; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i < arrlength * 2;
      let timeoutId;
      if (isColorChange) {
        const [barOneIdx, bucket, numBucket] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 1) % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        timeoutId = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          this.updateArray();
          this.props.invokePropHandler([
            0,
            barOneIdx,
            this.state.array[barOneIdx],
            barOneStyle.backgroundColor,
            bucket,
            numBucket,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
        }, timeDelay * ANIMATION_SPEED_MS);
      } else {
        //timeoutId = setTimeout(() => {
        const [barOneIdx, newHeight, numBucket, bucketNumber] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        timeoutId = setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
          this.updateArray();
          this.props.invokePropHandler([
            1,
            barOneIdx,
            this.state.array[barOneIdx],
            barOneStyle.backgroundColor,
            numBucket,
            bucketNumber,
          ]);
          this.setState((state, props) => ({ lastPos: state.lastPos + 1 }));
          //barTwoStyle.height = `${newHeight2}px`;
        }, timeDelay * ANIMATION_SPEED_MS);
      }
      timeoutIds.push(timeoutId);
      timeDelay++;
    }
    timeoutId = setTimeout(
      this.clearTimeoutsCompletion,
      timeDelay * ANIMATION_SPEED_MS
    );
    timeoutIds.push(timeoutId);
    //this.updateArray();
    this.setState({ timeoutIds });
    this.updateArray();
  }
  render() {
    const { array } = this.state;
    const { play } = this.state;

    const onInputhandler = (e) => {
      ANIMATION_SPEED_MS = e.target.value;
      console.log(ANIMATION_SPEED_MS);
    };

    return (
      <div id="VisualizerContainer" className="p-2 col-7">
        <div className="array-container">
          {array.map((value, idx) => (
            <div className="array-sub">
              <div className="array-top">{value}</div>
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="justify-content-center mb-2">
          <Button
            style={{ padding: "5px 25px" }}
            onClick={() => this.resetProblem()}
          >
            reset
          </Button>
          <Button
            style={{ padding: "5px 25px" }}
            onClick={() => (!play ? this.run() : this.pause())}
          >
            {!play ? "Play" : "Pause"}
          </Button>
          {/* <button onClick={() => this.pause(0)}>pause</button> */}
          {/* <button onClick={() => this.pause(2)}>back</button> */}
          <Button style={{ padding: "5px 25px" }} onClick={() => this.pause(1)}>
            forward
          </Button>
          <label for="speedSelect">Speed</label>
          <input
            style={{ margin: "0px 15px" }}
            name="speedSelect"
            type="range"
            step="5"
            min="5"
            max="50"
            onInput={onInputhandler}
          ></input>
          <span style={{ fontWeight: 700 }}>
            Execution time: {this.state.execTime} ms
          </span>
        </div>
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
