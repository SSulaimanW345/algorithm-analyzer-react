import React, { Component, useState } from "react";
import "./VisualizerContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getBubbleSortAnimations,
  getBucketSortAnimations,
  getCountingSortAnimations,
  getHeapSortAnimations,
  getInsertionSortAnimations,
  getMergeSortAnimations,
  getQuickSortAnimations,
  getRadixSortAnimations,
} from "../Algorithms/AlgoAnimations/AlgoAnimations.js";
var ANIMATION_SPEED_MS = 100;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
export default class VisualizerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      type: props.type,
    };
  }

  componentDidMount() {
    this.resetArray();
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.type !== prevProps.type) {
      this.setState({ type: this.props.type });
    }
    if (this.props.arr !== prevProps.arr) {
      this.setState({ array: this.props.arr });
    }
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 410));
    }
    this.setState({ array });
  }
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    console.log(ANIMATION_SPEED_MS);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx, barThirdIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barThirdStyle =
          barThirdIdx >= 0 ? arrayBars[barThirdIdx].style : -1;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        const colorThird = i % 3 === 0 ? "yellow" : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (barThirdStyle != -1) barThirdStyle.backgroundColor = colorThird;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight, barTwoIdx, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    console.log(ANIMATION_SPEED_MS);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  countSort() {
    const animations = getCountingSortAnimations(this.state.array);
    const arrlength = this.state.array.length;
    console.log(ANIMATION_SPEED_MS);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i < 2 * (arrlength - 1);
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 1) % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          //barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          //const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  radixSort() {
    const animations = getRadixSortAnimations(this.state.array);
    const arrlength = this.state.array.length;
    console.log(animations.length);
    //const [passes] = animations[0];
    //console.log(ANIMATION_SPEED_MS);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");

      const isColorChange = animations[i].length === 1;
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 2) % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          //barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          //const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    console.log(ANIMATION_SPEED_MS);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    console.log(ANIMATION_SPEED_MS);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  bucketSort() {
    const animations = getBucketSortAnimations(this.state.array);
    const arrlength = this.state.array.length;
    console.log(ANIMATION_SPEED_MS);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i < arrlength;
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i + 1) % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          //barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          //const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  render() {
    const { array } = this.state;
    const onInputhandler = (e) => {
      ANIMATION_SPEED_MS = e.target.value;
      console.log(ANIMATION_SPEED_MS);
    };
    return (
      <div className="p-2 p-2 col-md-7">
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="justify-content-center">
          <button onClick={() => this.bucketSort()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-play-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </button>
          <input
            type="range"
            step="5"
            min="5"
            max="50"
            onInput={onInputhandler}
          ></input>
        </div>
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
