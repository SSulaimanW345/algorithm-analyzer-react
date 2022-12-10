const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const ModifiedQuickSortProc = (props) => {
  return (
    <div>
      <div>
        <p>quickSort(arr, beg, end)</p>
        <p>if (beg less than end)</p>
        <p>pivotIndex = partition(arr,beg, end)</p>
        <p>quickSort(arr, beg, pivotIndex)</p>
        <p>quickSort(arr, pivotIndex + 1, end)</p>
        <p>partition(arr, beg, end)</p>
        <p>set end as pivotIndex;pIndex = beg - 1</p>
        <p>for i = beg to end-1</p>
        <p>arr[i] less than pivot</p>
        <p>swap arr[i] and arr[pIndex];pIndex++</p>
        <p>swap pivot and arr[pIndex+1]</p>
        <p>return pIndex + 1</p>
      </div>
      <div>
        {props.stepData == "" && <div>click play button to start</div>}
        {props.stepData[0] == 0 && <div>Sorting using partition</div>}
        {props.stepData != "" && props.stepData[0] == 0 && (
          <div>Pivot index: {props.stepData[7]}</div>
        )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[5] == SECONDARY_COLOR && (
            <div>
              <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[2]}
              </p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[5] == PRIMARY_COLOR &&
          props.stepData[6] == 0 && (
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
          props.stepData[0] == 0 &&
          props.stepData[5] == PRIMARY_COLOR &&
          props.stepData[6] == 1 && (
            <div>
              <p>
                Comparing values at index {props.stepData[1]} and{" "}
                {props.stepData[8]}
              </p>
              <p>
                Check if {props.stepData[4]} {" < "} {props.stepData[6]}
              </p>
              {props.stepData[4] < props.stepData[7] && (
                <div>
                  <p>True</p>
                  <p>
                    elements at index {props.stepData[3]} and{" "}
                    {props.stepData[4]} swapped
                  </p>
                </div>
              )}
              {props.stepData[4] >= props.stepData[7] && (
                <div>
                  <p>False</p>
                  <p>elements not swapped</p>
                </div>
              )}
            </div>
          )}
        {/* this is insertion */}
        {props.stepData[0] == 1 && <div>Sorting using Insertion Sort</div>}
        {props.stepData != "" &&
          props.stepData[0] == 1 &&
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
          props.stepData[0] == 1 &&
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
          props.stepData[0] == 1 &&
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
          props.stepData[0] == 1 &&
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
          props.stepData[0] == 1 &&
          props.stepData[5] == 2 && (
            <div>
              <p>
                moving element at index {props.stepData[2]} to pivot position{" "}
                {props.stepData[1]}
              </p>
              <p>element moved to its sorted position</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default ModifiedQuickSortProc;
