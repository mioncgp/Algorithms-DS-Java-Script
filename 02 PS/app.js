// Give 2 arrrays, create a function that let's a user know (true/false) whether these two arrays contain common items
const array1 = ["a", "b", "c"];
const array2 = ["b", "y", "a"];

// The first soultion: Big O(n^2) Time complexity: constant
function findCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// The secod solution: Big O(n + n) Time complexity: O(n)
function findCommonItems2(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      const item = arr1[i];
      obj[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

// Langugage specific solution
function findCommonItems3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
