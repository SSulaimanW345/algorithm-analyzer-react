const InsertionSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-6">
          <p>
            is a simple sorting algorithm that repeatedly steps through the
            list, compares adjacent elements and swaps them if they are in the
            wrong order.The pass through the list is repeated until the list is
            sorted. The algorithm, which is a comparison sort, is named for the
            way smaller or larger elements "bubble" to the top of the list.
            Although the algorithm is simple, it is too slow and impractical for
            most problems
          </p>
        </div>
        <div className="p-2 col-lg-6">
          <ul className="text-left">
            <li>Worst case: O(n^2)</li>
            <p>
              If we want to sort in ascending order and the array is in
              descending order then the worst case occurs.
            </p>
            <li>Best Case : O(n)</li>
            <p>
              If the array is already sorted, then there is no need for sorting.
            </p>
            <li>Average Case : O(n^2)</li>
            <p>
              It occurs when the elements of the array are in jumbled order
              (neither ascending nor descending).
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsertionSort;
