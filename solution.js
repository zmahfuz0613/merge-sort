// inputs two *sorted* arrays
// outputs a single array in sorted order
// function merge(arr1, arr2) {
//     var result = [];
  
//     while (arr1.length && arr2.length) {
//       if (arr1[0] <= arr2[0]) {
//         result.push(arr1.shift());
//       } else {
//         result.push(arr2.shift());
//       }
//     }
  
//     return result.concat(arr1, arr2);
//   }

  function merge(arr1, arr2) {
    var result = [];
    let index1 = 0;
    let index2 = 0;
     
    while (index1 < arr1.length && index2 < arr2.length) {
      const currentElement1 = arr1[index1]
      const currentElement2 = arr2[index2]

      if (currentElement1 <= currentElement2) {
        result.push(currentElement1);
        index1 ++
      } else {
        result.push(currentElement2);
        index2 ++
      }
    }    
    return result.concat(arr1.slice(index1),arr2.slice(index2) )
  }
  //code here; use merge as a helper!
  function mergeSort(arr) {
    if (arr.length <= 1) {
      // Base case: just return it!
      return arr;
    } else {
      // Find the middle index
      var middleIndex = Math.floor(arr.length / 2);
  
      // Using the middle index, split the array into left and right sides
      var left = arr.slice(0, middleIndex);
      var right = arr.slice(middleIndex, arr.length);
  
      // Sort both left and right using mergeSort
      var leftSorted = mergeSort(left);
      var rightSorted = mergeSort(right);
  
      // Merge two sorted arrays together
      return merge(leftSorted, rightSorted);
    }
  }
  // create a new sorted array
  // for a challenge, sort the array in place!
  
  module.exports = {
    merge,
    mergeSort
  };
  

  /*
// callstack
mergeSort [5,2,1,5,2,10,0,1]
mergeSort[5,2,1,5] mergeSort [2,10,0,1]
mergeSort[5,2] mergeSort[1,5] mergeSort [2,10] mergeSort[0,1]
[5],[2],[1],[5],[2],[10],[0],[1]
[2,5] [1,5] [2, 10] [0,1]
[1,2,5,5]  [0,1,2,10]
[0,1,1,2,2,5,5,10]

  */