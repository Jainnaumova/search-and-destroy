"use strict";

// Complete this algo
// const binarySearch = (array, target) => {
// 	for (let i = 0; i < array.length; i++) {
// 		let curEl = array[i];
// 		if (curEl === target) return true;
//
// 	}
//   return false;
// };

// const binarySearch = (array, target) => {
//   if (!array.length || (array.length === 1 && array[0] !== target))
//     return false;
//   if (array.length === 1 && array[0] === target) return true;
//   else {
//     let midpoint = array[Math.floor(array.length / 2)];
//     if (target < midpoint) {
//       array = array.slice(0, midpoint);
//       return binarySearch(array, target);
//     } else {
//       array = array.slice(midpoint, array.length - 1);
//       return binarySearch(array, target);
//     }
//   }
// };
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
