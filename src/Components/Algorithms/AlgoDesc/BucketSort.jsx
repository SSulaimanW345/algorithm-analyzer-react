const BucketSort = () => {
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
              When there are elements of close range in the array, they are
              likely to be placed in the same bucket. This may result in some
              buckets having more number of elements than others.
            </p>
            <li>Best Case : O(n+k)</li>
            <p>
              It occurs when the elements are uniformly distributed in the
              buckets with a nearly equal number of elements in each bucket.
            </p>
            <li>Average Case : O(n)</li>
            <p>
              It occurs when the elements are distributed randomly in the array.
              Even if the elements are not distributed uniformly, bucket sort
              runs in linear time.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BucketSort;
