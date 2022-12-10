import "./allDesc.css";

const ModifiedQuickSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is Modified QuickSort?</h1>
          <p className="p-4">
            Quicksort algorithm is efficient if the size of the input is very
            large. But, insertion sort is more efficient than quick sort in case
            of small arrays as the number of comparisons and swaps are less
            compared to quicksort. So we combine the two algorithms to sort
            efficiently using both approaches. The idea is to use recursion and
            continuously find the size of the array. If the size is greater than
            the threshold value(10), then the quicksort function is called for
            that portion of the array. Else, insertion sort is called.
          </p>
          <h1>How to calculate time complexity?</h1>
          <p className="p-4">
            is a simple sorting algorithm that repeatedly steps through the
            list, compares adjacent elements and swaps them if they are in the
            wrong order.The pass through the list is repeated until the list is
            sorted. The algorithm, which is a comparison sort, is named for the
            way smaller or larger elements "bubble" to the top of the list.
            Although the algorithm is simple, it is too slow and impractical for
            most problems
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n^2)</li>
              <p>
                Suppose, an array is in ascending order, and you want to sort it
                in descending order. In this case, worst case complexity occurs.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Best Case : O(n)</li>
              <p>
                When the array is already sorted, the outer loop runs for n
                number of times whereas the inner loop does not run at all. So,
                there are only n number of comparisons. Thus, complexity is
                linear.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Average Case : O(n^2)</li>
              <p>
                It occurs when the elements of the array are in jumbled order
                (neither ascending nor descending).
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModifiedQuickSort;
