import "./allDesc.css";

const HeapSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is Heap Sort?</h1>
          <p className="p-4">
            Heap sort is a comparison-based sorting technique based on Binary
            Heap data structure. It is similar to the selection sort where we
            first find the minimum element and place the minimum element at the
            beginning. Repeat the same process for the remaining elements.
          </p>
          <h1>How to calculate time complexity?</h1>
          <p className="p-4">
            Heap Sort has O(nlog n) time complexities for all the cases ( best
            case, average case, and worst case). The height of a complete binary
            tree containing n elements is log n As we have seen earlier, to
            fully heapify an element whose subtrees are already max-heaps, we
            need to keep comparing the element with its left and right children
            and pushing it downwards until it reaches a point where both its
            children are smaller than it. In the worst case scenario, we will
            need to move an element from the root to the leaf node making a
            multiple of log(n) comparisons and swaps. During the build_max_heap
            stage, we do that for n/2 elements so the worst case complexity of
            the build_heap step is n/2*log n ~ nlog n. During the sorting step,
            we exchange the root element with the last element and heapify the
            root element. For each element, this again takes log n worst time
            because we might have to bring the element all the way from the root
            to the leaf. Since we repeat this n times, the heap_sort step is
            also nlog n. Also since the build_max_heap and heap_sort steps are
            executed one after another, the algorithmic complexity is not
            multiplied and it remains in the order of nlog n.
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(nlog n)</li>
            </div>
            <div className="GeneralContainer">
              <li>Best Case: O(nlog n)</li>
            </div>
            <div className="GeneralContainer">
              <li>Average Case: O(nlog n)</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeapSort;
