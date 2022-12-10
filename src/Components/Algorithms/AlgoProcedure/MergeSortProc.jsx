const MergeSortProc = (props) => {
  return (
    <div>
      <div>
        <p>mergeSort(int array[], int const begin, int const end)</p>
        <p>if (begin {">"}= end) return;</p>
        <p>mid = begin + (end - begin) / 2; mergeSort(array, begin, mid);</p>
        <p>mergeSort(array, mid + 1, end); merge(array, begin, mid, end); </p>
      </div>
    </div>
  );
};

export default MergeSortProc;
