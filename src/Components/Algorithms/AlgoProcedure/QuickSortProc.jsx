const QuickSortProc = (props) => {
  return (
    <div>
      <div> quickSort(arr, beg, end)</div>
      <div>if (beg less than end)</div>
      <div>pivotIndex = partition(arr,beg, end)</div>
      <div>quickSort(arr, beg, pivotIndex)</div>
      <div>quickSort(arr, pivotIndex + 1, end)</div>
      <div>partition(arr, beg, end)</div>
      <div>set end as pivotIndex</div>
      <div>pIndex = beg - 1</div>
      <div>for i = beg to end-1</div>
      <div> arr[i] less than pivot</div>
      <div>swap arr[i] and arr[pIndex]</div>
      <div>pIndex++</div>
      <div>swap pivot and arr[pIndex+1]</div>
      <div>return pIndex + 1</div>
    </div>
  );
};

export default QuickSortProc;
