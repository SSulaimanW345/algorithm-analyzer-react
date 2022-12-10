const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const QuickSortProc = (props) => {
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
        {props.stepData != "" && <div>Pivot index: {props.stepData[6]}</div>}
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
                {props.stepData[7]}
              </p>
              <p>
                Check if {props.stepData[3]} {" < "} {props.stepData[6]}
              </p>
              {props.stepData[3] < props.stepData[6] && (
                <div>
                  <p>True</p>
                  <p>
                    elements at index {props.stepData[2]} and{" "}
                    {props.stepData[3]} swapped
                  </p>
                </div>
              )}
              {props.stepData[3] >= props.stepData[6] && (
                <div>
                  <p>False</p>
                  <p>elements not swapped</p>
                </div>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default QuickSortProc;
