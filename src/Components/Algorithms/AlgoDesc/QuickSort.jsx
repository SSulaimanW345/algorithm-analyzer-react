const QuickSort = () => {
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
              It occurs when the pivot element picked is either the greatest or
              the smallest element.
            </p>
            <li>Best Case : O(n*log n)</li>
            <p>
              It occurs when the pivot element is always the middle element or
              near to the middle element.
            </p>
            <li>Average Case : O(n*log n)</li>
            <p>It occurs when the above conditions do not occur.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickSort;
