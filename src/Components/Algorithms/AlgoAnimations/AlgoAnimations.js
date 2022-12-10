export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
}
  
export function getBubbleSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++){
            animations.push([i, j]);
            animations.push([i, j]);
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                animations.push([j,array[j],i,array[i]]);
            }
            else {
                animations.push([j,array[j],i,array[i]]);
            }
        }
    }
    return animations;
}
export function getInsertionSortAnimations(array) {
    const animations = [];
    for (let i = 1; i < array.length;i++){
        let key = array[i];
        let j = i - 1;
        if (j >= 0 && array[j] < key) {
            animations.push([i, j,key]);
            animations.push([i, j,key]);
            animations.push([i, array[i],j,0]);
        }
        while (j >= 0 && array[j] > key) {
            animations.push([i, j,key]);
            animations.push([i, j,key]);
            array[j + 1] = array[j];
            animations.push([j+1,array[j],key,1]);
            j--;
        }
        array[j + 1] = key;
        animations.push([i, j+1,-1]);
        animations.push([i, j+1,-1]);
        animations.push([j+1,key,i,2]);
    }
    return animations;
}
export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quicksortarr(array, 0, array.length - 1, animations);
    
    return animations;
}
function quicksortarr(array, low,high,animations) {
    if (low < high) {
        let pi = quicksortPartition(array, low, high,animations);
        quicksortarr(array,low,pi-1,animations);
        quicksortarr(array,pi+1,high,animations);
    }
}
function quicksortPartition(array,low,high,animations) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high; j++){
        
        if (array[j] < pivot) {
            i++;
            animations.push([j, high,i,high]);
            animations.push([j, high,i,high]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            animations.push([i, array[i], j, array[j],high]);
        }
        else {
            animations.push([j, high,-1,high]);
            animations.push([j, high,-1,high]);
            animations.push([high,array[high],j,array[j],high]);
        }
    }
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    animations.push([high, high,i+1,high]);
    animations.push([high, high,i+1,high]);
    animations.push([i+1,array[i+1],high,array[high],high]);
    return (i+1);
}

export function getHeapSortAnimations(array) {
  const animations = [];
  for (let i = array.length / 2; i >=0;i--){
    heapify(array,array.length,i,animations);
  }
  for (let i = array.length - 1; i >= 0; i--){
    animations.push([0,i]);
    animations.push([0,i]);
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    animations.push([0,array[0],i,array[i]]);
    heapify(array, i, 0,animations);
  }
  return animations;
}
function heapify(arr,N, i,animations ) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < N && arr[left] > arr[largest])
  {
    largest = left;
    animations.push([largest, left]);
    animations.push([largest, left]);
    animations.push([largest,arr[largest], left,arr[left]]);
  }
  if (right < N && arr[right] > arr[largest])
  {
    largest = right;
    animations.push([largest, right]);
    animations.push([largest, right]);
    animations.push([largest, arr[largest], right, arr[right]]);
  }
  if (largest != i) {
    animations.push([largest, i]);
    animations.push([largest, i]);
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    animations.push([largest, arr[largest], i, arr[i]]);
    heapify(arr,N,largest,animations);
  }
}
export function getRadixSortAnimations(array) {
  const animations = [];
  const maxNum = array.reduce((a, b) => Math.max(a, b), -Infinity);
  //console.log(maxNum);
  //animations.push([maxNum]);
  var passNum = 1;
  for (let pass = 1; Math.floor(maxNum / pass) > 0; pass = pass * 10)
  {
    //console.log(pass);
    console.log(array);
    countSortRadix(array, array.length, pass, animations, passNum);
    passNum++;
  }
  
  return animations;
}
function countSortRadix(arr, n,pass,animations,passNum) {
  let output =  new Array(n).fill(0); // output array
  let countarr = new Array(10).fill(0);
  //console.log(animations);
  for (let i = 0; i < n; i++) {
    console.log(Math.floor((arr[i] / pass)) % 10);
    countarr[Math.floor((arr[i] / pass)) % 10]++; animations.push([i,passNum,pass]);animations.push([i,passNum,pass]);
  }
  for (let i = 1; i < 10; i++) {
    countarr[i] += countarr[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[countarr[Math.floor((arr[i] / pass)) % 10] - 1] = arr[i];
      animations.push([countarr[Math.floor((arr[i] / pass)) % 10] - 1,arr[i],i,passNum,pass]);
      countarr[Math.floor((arr[i] / pass)) % 10]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    //animations.push([i, output[i], passNum]);
  }

  //console.log(arr);
} 

export function getBucketSortAnimations(array) {
  const animations = [];
  let minVal = Infinity;
  let maxVal = -Infinity;
  array.forEach(element => {
    if (element < minVal) minVal = element;
    else if (element > maxVal) maxVal = element;
  });
  const bucketSize = 5;
  let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
  console.log(bucketCount);
  const Buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount;i++){
    Buckets[i] = [];
  }
  let i = 0;
  array.forEach(element => {
    Buckets[Math.floor((element - minVal) / bucketSize)].push(element);
    animations.push([i, Math.floor((element - minVal) / bucketSize), bucketCount]);
    animations.push([i, Math.floor((element - minVal) / bucketSize), bucketCount]);
    i++;
  });
  i = 0;
  var bucketNum = 1;
  Buckets.forEach(function(bucket) {
  	insertionSort(bucket);
  	bucket.forEach(function (element) {
      array.push(element);
      animations.push([i, element,bucketCount,bucketNum]);
      i++;
    });
    bucketNum++;
  });
  return animations;
}

function insertionSort(array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}
export function getCountingSortAnimations(array) {
  const animations = [];
  const max = array.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);
  let countarr =  new Array(max+1).fill(0);
  let output = new Array(max+1).fill(0);;
  const range = array.length;
  for (let i = 0; i < range;i++) { 
    countarr[array[i]]+=1;
    //console.log(countarr);
    animations.push([i]);
    animations.push([i]);
  }
  for (let i = 1; i <= max; i++){
    countarr[i] += countarr[i - 1];
    //animations.push([i, i-1]);
  }
  for (let i = range-1; i>=0; i--) { 
    output[countarr[array[i]] - 1] = array[i];
    animations.push([countarr[array[i]] - 1,array[i],i]);
    countarr[array[i]]--;
    
  }
  for (let i = 0; i<range; i++) {
    array[i] = output[i];//animations.push([i,output[i]]);
  }
  console.log(output);

  return animations;
}
export function getCountElementsAnimations(array, first,second) {
  const animations = [];
  const max = array.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);
  let countarr =  new Array(max+1).fill(0);
  let output = new Array(max+1).fill(0);;
  const range = array.length;
  for (let i = 0; i < range;i++) { 
    countarr[array[i]]+=1;
    //console.log(countarr);
    animations.push([i]);
    animations.push([i]);
  }
  for (let i = 1; i <= max; i++){
    countarr[i] += countarr[i - 1];
    //animations.push([i, i-1]);
  }
  for (let i = range-1; i>=0; i--) { 
    output[countarr[array[i]] - 1] = array[i];
    animations.push([countarr[array[i]] - 1,array[i],i]);
    countarr[array[i]]--;
    
  }
  for (let i = 0; i<range; i++) {
    array[i] = output[i];//animations.push([i,output[i]]);
  }
  var countNum = 0;
  for (let i = 0; i<range; i++) {
    if (array[i] >= first && array[i] <= second) {
      countNum++;animations.push([i,countNum]);
    }
  }
  //animations.push([countNum]);
  console.log(output);

  return animations;
}
export function getOptimizedQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  Optimizedquicksortarr(array, 0, array.length - 1, animations);
  
  return animations;
}
function Optimizedquicksortarr(array, low,high,animations) {
  while (low < high)
    {
        // switch to insertion sort if the size is 10 or smaller
        if (high - low < 10)
        {
          OptimizedInsertionsort(array, low, high,animations);
          break;
        }
        else {
            var pivot = quicksortPartitionOpt(array, low, high,animations);
 
            // tail call optimizations – recur on the smaller subarray
            if (pivot - low < high - pivot)
            {
              Optimizedquicksortarr(array, low, pivot - 1,animations);
                low = pivot + 1;
            }
            else {
              Optimizedquicksortarr(array, pivot + 1, high,animations);
                high = pivot - 1;
            }
        }
    }

}

function OptimizedInsertionsort(array,low,n,animations) {
  for (let i = low + 1; i <= n; i++)
    {
      let key = array[i];
      let j = i - 1;
      if (j >= 0 && array[j] < key) {
          animations.push([1,i, j,key]);
          animations.push([1,i, j,key]);
          animations.push([1,i, array[i],j,0]);
      }
      while (j >= 0 && array[j] > key) {
          animations.push([1,i, j,key]);
          animations.push([1,i, j,key]);
          array[j + 1] = array[j];
          animations.push([1,j+1,array[j],key,1]);
          j--;
      }
      array[j + 1] = key;
      animations.push([1,i, j+1,-1]);
      animations.push([1,i, j+1,-1]);
      animations.push([1,j+1,key,i,2]);
    }
}
function quicksortPartitionOpt(array,low,high,animations) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high; j++){
      
      if (array[j] < pivot) {
          i++;
          animations.push([0,j, high,i,high]);
          animations.push([0,j, high,i,high]);
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          animations.push([0,i, array[i], j, array[j],high]);
      }
      else {
          animations.push([0,j, high,-1,high]);
          animations.push([0,j, high,-1,high]);
          animations.push([0,high,array[high],j,array[j],high]);
      }
  }
  let temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;
  animations.push([0,high, high,i+1,high]);
  animations.push([0,high, high,i+1,high]);
  animations.push([0,i+1,array[i+1],high,array[high],high]);
  return (i+1);
}