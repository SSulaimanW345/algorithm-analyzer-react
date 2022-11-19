const RadixSortProc = (props) => {
  return (
    <div>
      <div> size = len(array)</div>
      <div>output = [0] * size</div>
      <div>count = [0] * 10</div>
      <div>for i in range(0, size):</div>
      <div> index = array[i] </div>
      <div> count[index % 10] += 1</div>
      <div>for i in range(1, 10):</div>
      <div> count[i] += count[i - 1]</div>
      <div>i = size - 1</div>
      <div>while i is greater than 0:</div>
      <div>index = array[i]</div>
      <div>output[count[index % 10] - 1] = array[i]</div>
      <div>count[index % 10] -= 1</div>
      <div> i -= 1</div>
      <div>for i in range(0, size):</div>
      <div> array[i] = output[i]</div>
    </div>
  );
};

export default RadixSortProc;
