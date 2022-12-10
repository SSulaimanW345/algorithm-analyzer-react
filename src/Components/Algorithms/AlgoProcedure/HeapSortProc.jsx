const HeapSortProc = (props) => {
  return (
    <div>
      <div>
        <p>void heapSort(int arr[], int N)</p>
        <p>for (int i = N / 2 - 1; i{">"}= 0; i--) heapify(arr, N, i);</p>
        <p>for (int i = N - 1; i{">"} 0; i--)</p>
        <p>swap(arr[0], arr[i]);</p>
        <p>heapify(arr, i, 0);</p>
      </div>
    </div>
  );
};

export default HeapSortProc;
