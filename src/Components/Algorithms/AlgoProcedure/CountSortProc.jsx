import { useEffect, useState } from "react";

const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const CountSortProc = (props) => {
  return (
    <div>
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
      </div>
      <div>
        count array of length n intialized
        <br />
        pass=1
      </div>
      <div>
        for i = 0 to n do <br /> count[key of(A[i]) in pass j]++
      </div>
      <div>
        for k = 1 to 10 do <br /> count[k] = count[k] + count[k-1]
      </div>
      <div>
        for i = n-1 downto 0 do <br /> result[ count[key of(A[i])] ] = A[j]
        <br />
        count[key of(A[i])]--
      </div>
    </div>
  );
};

export default CountSortProc;
