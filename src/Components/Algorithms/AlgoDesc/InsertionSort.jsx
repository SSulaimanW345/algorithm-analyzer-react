import "./allDesc.css";
import insertionTime from "../../../assests/InsertionSortTime.JPG";

const InsertionSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is Insertion Sort?</h1>
          <p className="p-4">
            Insertion sort is a sorting algorithm that places an unsorted
            element at its suitable place in each iteration. Insertion sort
            works similarly as we sort cards in our hand in a card game. We
            assume that the first card is already sorted then, we select an
            unsorted card. If the unsorted card is greater than the card in
            hand, it is placed on the right otherwise, to the left. In the same
            way, other unsorted cards are taken and put in their right place.
          </p>
          <h1>How to calculate timme complexity?</h1>
          <p className="p-4">
            <img src={insertionTime} />
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n^2)</li>
              <p>
                If we want to sort in ascending order and the array is in
                descending order then the worst case occurs.
              </p>
            </div>
            <div className="GeneralContainer">
              <li>Best Case : O(n)</li>
              <p>
                If the array is already sorted, then there is no need for
                sorting.
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

export default InsertionSort;
