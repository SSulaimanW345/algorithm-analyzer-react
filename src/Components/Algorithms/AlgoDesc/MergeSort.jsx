import "./allDesc.css";
import mergeTime from "../../../assests/MergeSortTime.JPG";

const MergeSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is MergeSort?</h1>
          <p className="p-4">
            Using the Divide and Conquer technique, we divide a problem into
            subproblems. When the solution to each subproblem is ready, we
            'combine' the results from the subproblems to solve the main
            problem. Suppose we had to sort an array A. A subproblem would be to
            sort a sub-section of this array starting at index p and ending at
            index r, denoted as A[p..r]. Divide If q is the half-way point
            between p and r, then we can split the subarray A[p..r] into two
            arrays A[p..q] and A[q+1, r]. Conquer In the conquer step, we try to
            sort both the subarrays A[p..q] and A[q+1, r]. If we haven't yet
            reached the base case, we again divide both these subarrays and try
            to sort them. Combine When the conquer step reaches the base step
            and we get two sorted subarrays A[p..q] and A[q+1, r] for array
            A[p..r], we combine the results by creating a sorted array A[p..r]
            from two sorted subarrays A[p..q] and A[q+1, r].
          </p>
          <h1>How to calculate time complexity?</h1>
          <p className="p-4">
            <img className="col-12" src={mergeTime} />
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n * log(n))</li>
            </div>

            <div className="GeneralContainer">
              <li>Best Case : O(n * log(n))</li>
            </div>
            <div className="GeneralContainer">
              <li>Average Case : O(n * log(n))</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MergeSort;
