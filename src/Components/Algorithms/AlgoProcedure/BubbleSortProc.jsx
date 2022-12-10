import { useEffect, useState } from "react";
import "./allProc.css";
const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

const BubbleSortProc = (props) => {
  console.log(props.stepData);

  return (
    <div>
      <div>
        <p>for i in range(n-1):</p>
        <p> for j in range(0, n-i-1):</p>
        <p>if arr[j] is greater arr[j + 1]:</p>
        <p>arr[j], arr[j + 1] = arr[j + 1],arr[j]</p>
      </div>
      <div>
        {props.stepData == "" && <div>click play button to start</div>}
        {props.stepData != "" && props.stepData[4] == SECONDARY_COLOR && (
          <div>
            <p>
              Comparing values at index {props.stepData[0]} and{" "}
              {props.stepData[1]}
            </p>
          </div>
        )}
        {props.stepData != "" &&
          props.stepData[4] == PRIMARY_COLOR &&
          props.stepData[5] == 0 && (
            <div>
              <p>
                Comparing values at index {props.stepData[0]} and{" "}
                {props.stepData[1]}
              </p>
              <p>
                Check if {props.stepData[2]} {" < "} {props.stepData[3]}
              </p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[4] == PRIMARY_COLOR &&
          props.stepData[5] == 1 && (
            <div>
              <p>
                Comparing values at index {props.stepData[0]} and{" "}
                {props.stepData[1]}
              </p>
              <p>
                Check if {props.stepData[2]} {" < "} {props.stepData[3]}
              </p>
              {props.stepData[2] < props.stepData[3] && (
                <div>
                  <p>True</p>
                  <p>elements swapped</p>
                </div>
              )}
              {props.stepData[2] >= props.stepData[3] && (
                <div>
                  <p>False</p>
                  <p>elements not swapped</p>
                </div>
              )}
            </div>
          )}

        {/* {if (props === undefined) <div>click play button to start</div>;
        else if (props.stepData[4] == PRIMARY_COLOR){" "}
        {
          <div>
            <p>
              Comparing values at index {props.stepData[0]} and{" "}
              {props.stepData[1]}
            </p>
            <p>
              Check if {props.stepData[2]} {" < "} {props.stepData[3]}
            </p>
          </div>
        }{" "}
        else{" "}
        {
          <div>
            <p>
              Comparing values at index {props.stepData[0]} and{" "}
              {props.stepData[1]}
            </p>
            <p>
              Check if {props.stepData[2]} {" < "} {props.stepData[3]}
            </p>
            <p>swap if required</p>
          </div>
        }} */}
      </div>
    </div>
  );
};

export default BubbleSortProc;
