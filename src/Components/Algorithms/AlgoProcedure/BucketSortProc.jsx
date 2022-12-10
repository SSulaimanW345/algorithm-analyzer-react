import "./allProc.css";

const PRIMARY_COLOR = "turquoise";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

const BucketSortProc = (props) => {
  return (
    <div>
      <div>
        <p>for i in range(len(array)):bucket.append([])</p>
        <p>for j in array:</p>
        <p> index_b = int(10 * j)</p>
        <p> bucket[index_b].append(j)</p>
        <p>for i in range(len(array)): bucket[i] = sorted(bucket[i])</p>
        <p>k = 0</p>
        <p>for i in range(len(array)):</p>
        <p> for j in range(len(bucket[i])):</p>
        <p> array[k] = bucket[i][j];k++</p>
      </div>
      <div>
        {props.stepData != "" && props.stepData[0] == 0 && (
          <div>Number of buckets : {props.stepData[5]}</div>
        )}
        {props.stepData != "" && props.stepData[0] == 1 && (
          <div>Number of buckets : {props.stepData[4]}</div>
        )}
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
                value at index {props.stepData[2]} placed in bucket{" "}
                {props.stepData[4]}
              </p>
            </div>
          )}
        {props.stepData != "" && props.stepData[0] == 1 && (
          <div>
            <p>populating sorted array</p>
            <p>unloading sorted bucket: {props.stepData[5]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BucketSortProc;
