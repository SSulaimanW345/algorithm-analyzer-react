import "./allDesc.css";
const RadixSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is RadixSort?</h1>
          <p className="p-4">
            Radix sort is a sorting algorithm that sorts the elements by first
            grouping the individual digits of the same place value. Then, sort
            the elements according to their increasing/decreasing order.
            Suppose, we have an array of 8 elements. First, we will sort
            elements based on the value of the unit place. Then, we will sort
            elements based on the value of the tenth place. This process goes on
            until the last significant place.
          </p>
          <h1>How to calculate timme complexity?</h1>
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
              <li>Worst case: O(n+k)</li>
            </div>
            <div className="GeneralContainer">
              <li>Best Case: O(n+k)</li>
            </div>
            <div className="GeneralContainer">
              <li>Average Case: O(n+k)</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RadixSort;
