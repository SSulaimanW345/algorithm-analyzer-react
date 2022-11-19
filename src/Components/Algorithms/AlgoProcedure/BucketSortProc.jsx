const BucketSortProc = (props) => {
  return (
    <div>
      <div> bucket = []</div>

      <div>for i in range(len(array)):</div>
      <div> bucket.append([])</div>

      <div>for j in array:</div>
      <div> index_b = int(10 * j)</div>
      <div> bucket[index_b].append(j)</div>

      <div>for i in range(len(array)):</div>
      <div> bucket[i] = sorted(bucket[i])</div>

      <div>k = 0</div>
      <div>for i in range(len(array)):</div>
      <div> for j in range(len(bucket[i])):</div>
      <div> array[k] = bucket[i][j]</div>
      <div> k++</div>
    </div>
  );
};

export default BucketSortProc;
