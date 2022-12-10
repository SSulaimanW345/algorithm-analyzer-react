import { useEffect, useState } from "react";
import "./allProc.css";

const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const CountElementsproc = (props) => {
  return (
    <div>
      <div>
        <p>count array of length n intialized</p>
        <p>for i = 0 to n do: count[key of(A[i]) in pass j]++</p>
        <p>for k = 1 to 10: count[k] = count[k] + count[k-1]</p>
        <p>for i = n-1 downto 0 do</p>
        <p>result[ count[key of(A[i])] ] = A[j]</p>
        <p>count[key of(A[i])]--</p>
      </div>
      <div>
        {props.stepData == "" && <div>click play button to start</div>}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[3] == SECONDARY_COLOR && (
            <div>
              <p>Selected array element at index {props.stepData[1]}</p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[3] == PRIMARY_COLOR && (
            <div>
              <p>Selected array element at index {props.stepData[1]}</p>
              <p>
                value of index {props.stepData[2]} in count array incremented by
                1
              </p>
            </div>
          )}
        {props.stepData != "" && props.stepData[0] == 1 && (
          <div>
            <p>populating sorted array</p>
            <p>
              element at index {props.stepData[3]} with value{" "}
              {props.stepData[2]} positioned at index {props.stepData[1]}
            </p>
          </div>
        )}
        {props.stepData != "" && props.stepData[0] == 2 && (
          <div>
            <p>
              Finding count of elements in range {props.stepData[2]} -{" "}
              {props.stepData[3]}
            </p>
            <p>count: {props.stepData[1]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountElementsproc;
