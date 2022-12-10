import "./allDesc.css";
import CountTime from "../../../assests/CountSortTime.JPG";

const CountElements = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>How to count numbers in a given range in sorted array?</h1>
          <p className="p-4">
            We have used CountSort to sort given array in linear time. An
            additional for loop is added which iterates the array and increments
            count if the number is between the specified range.
          </p>
          <p className="p-4">
            <h1>How in linear time?</h1>
            <img className="col-12" src={CountTime} />
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n+k)</li>
            </div>
            <div className="GeneralContainer">
              <li>Best Case : O(n+k)</li>
            </div>
            <div className="GeneralContainer">
              <li>Average Case : O(n+k)</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountElements;
