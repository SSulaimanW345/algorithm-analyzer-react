const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const InsertionSortProc = (props) => {
  return (
    <div>
      <div>
        {props.stepData == "" && <div>click play button to start</div>}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[5] == SECONDARY_COLOR &&
          props.stepData[3] != -1 && (
            <div>
              <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[2]}
              </p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[5] == SECONDARY_COLOR &&
          props.stepData[3] == -1 && (
            <div>
              <p>
                Moving element at index {props.stepData[1]} to{" "}
                {props.stepData[2]}
              </p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[5] == PRIMARY_COLOR &&
          props.stepData[3] == -1 && (
            <div>
              <p>
                Moving element at index {props.stepData[1]} to{" "}
                {props.stepData[2]}
              </p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[5] == PRIMARY_COLOR &&
          props.stepData[3] != -1 &&
          props.stepData[0] == 0 && (
            <div>
              <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[2]}
              </p>
              <p>
                Check if {props.stepData[3]} {" < "} {props.stepData[4]}
              </p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 1 &&
          props.stepData[5] == 1 && (
            <div>
              <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[2]}
              </p>
              <p>
                Check if {props.stepData[4]} {" < "} {props.stepData[3]}
              </p>
              {props.stepData[4] > props.stepData[3] && (
                <div>
                  <p>False</p>
                  <p>element not moved</p>
                </div>
              )}
              {props.stepData[4] <= props.stepData[3] && (
                <div>
                  <p>True</p>
                  <p>element moved one position ahead</p>
                </div>
              )}
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 1 &&
          props.stepData[5] == 0 && (
            <div>
              <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[2]}
              </p>
              <p>
                Check if {props.stepData[3]} {" < "} {props.stepData[4]}
              </p>
              {props.stepData[3] < props.stepData[4] && (
                <div>
                  <p>True</p>
                  <p>element moved one position ahead</p>
                </div>
              )}
              {props.stepData[3] >= props.stepData[4] && (
                <div>
                  <p>False</p>
                  <p>preceding array already sorted</p>
                </div>
              )}
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 1 &&
          props.stepData[5] == 2 && (
            <div>
              {/* <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[2]}
              </p>
              <p>
                Check if {props.stepData[3]} {" < "} {props.stepData[4]}
              </p>
              {props.stepData[2] < props.stepData[3] && (
                <div>
                  <p>True</p>
                  <p>element moved one position ahead</p>
                </div>
              )}
              {props.stepData[2] >= props.stepData[3] && (
                <div>
                  <p>False</p>
                  <p>element not moved</p>
                </div>
              )} */}
              <p>
                moving element at index {props.stepData[2]} to pivot position{" "}
                {props.stepData[1]}
              </p>
              <p>element moved to its sorted position</p>
            </div>
          )}
      </div>
      <div>for step in range(1, len(array)):</div>
      <div>key = array[step]</div>
      <div>j = step - 1</div>

      <div>while j greater than or equal to 0 and key less than array[j]:</div>
      <div> array[j + 1] = array[j]</div>
      <div> j = j - 1</div>

      <div>array[j + 1] = key</div>
    </div>
  );
};

export default InsertionSortProc;
