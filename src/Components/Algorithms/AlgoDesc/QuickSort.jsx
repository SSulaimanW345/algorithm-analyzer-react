import "./allDesc.css";
import quickTime from "../../../assests/QuickSortTime.JPG";
const QuickSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is QuickSort?</h1>
          <p className="p-4">
            Quicksort is a sorting algorithm based on the divide and conquer
            approach where An array is divided into subarrays by selecting a
            pivot element (element selected from the array). While dividing the
            array, the pivot element should be positioned in such a way that
            elements less than pivot are kept on the left side and elements
            greater than pivot are on the right side of the pivot. The left and
            right subarrays are also divided using the same approach. This
            process continues until each subarray contains a single element. At
            this point, elements are already sorted. Finally, elements are
            combined to form a sorted array.
          </p>
          <h1>How to calculate time complexity?</h1>
          <p className="p-4">
            <img className="col-12" src={quickTime} />
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n^2)</li>
              <p>
                It occurs when the pivot element picked is either the greatest
                or the smallest element.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Best Case : O(n*log n)</li>
              <p>
                It occurs when the pivot element is always the middle element or
                near to the middle element.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Average Case : O(n*log n)</li>
              <p>It occurs when the above conditions do not occur.</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickSort;
