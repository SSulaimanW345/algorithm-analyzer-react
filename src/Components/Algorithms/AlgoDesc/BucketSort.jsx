import "./allDesc.css";
const BucketSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is Bucket Sort?</h1>
          <p className="p-4">
            Bucket Sort is a sorting algorithm that divides the unsorted array
            elements into several groups called buckets. Each bucket is then
            sorted by using any of the suitable sorting algorithms or
            recursively applying the same bucket algorithm. Finally, the sorted
            buckets are combined to form a final sorted array.
          </p>
          <h1>How to calculate time complexity?</h1>
          <p className="p-4">
            In our bucket sort algorithm, we have four loops (step 1, step 3,
            step 4 and step 5) which iterate over k buckets and n elements. The
            average case occurs when the elements are distributed randomly in
            the list. Bucket sort runs in linear time in all cases until the sum
            of the squares of the bucket sizes is linear in the total number of
            elements. It takes O(n) time in order for us to assign and store all
            the elements of the input array into the bucket list. Since we are
            using the insertion sort algorithm to sort each bucket individually,
            step 4 (from our algorithm) would cost us O(n) time.
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n^2)</li>
              <p>
                When there are elements of close range in the array, they are
                likely to be placed in the same bucket. This may result in some
                buckets having more number of elements than others.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Best Case : O(n+k)</li>
              <p>
                It occurs when the elements are uniformly distributed in the
                buckets with a nearly equal number of elements in each bucket.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Average Case : O(n)</li>
              <p>
                It occurs when the elements are distributed randomly in the
                array. Even if the elements are not distributed uniformly,
                bucket sort runs in linear time.
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BucketSort;
