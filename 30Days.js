const findLogestStr = (strArray) => {
  let maxLength = 0;
  let elementIndex = 0;
  //O(n)
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > maxLength) {
      maxLength = strArray[i].length;
      elementIndex = i;
    }
  }

  return strArray[elementIndex];
};

// console.log(findLogestStr(["cake", "bananana", "egg", "monster"]));

const totalMakeZero = (arr) => {
  const finalObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] === 0) {
      finalObj[i] = arr[i];
      finalObj[i + 1] = arr[i + 1];
      finalObj[i + 2] = arr[i + 2];
    }
  }
  return Object.values(finalObj)?.length ? finalObj : null;
};

// console.log(totalMakeZero([0, -1, 2, -3, 1]));
// console.log(totalMakeZero([1, 0, -1, 2, -3]));
// console.log(totalMakeZero([-3, 2, 0, -1, 2]));

const removeGivenElement = (arr, ele) => {
  //   const mainArr = new Set(arr);
  //   mainArr.delete(ele);
  //   return [...mainArr];

  //OR
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

// console.log(removeGivenElement([1, 2, 3, 22, 3, 4, 3], 2));

const twoSum = (nums, target) => {
  //   let numsObj = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     const missingEle = target - nums[i];
  //     if ([missingEle] in numsObj) {
  //       return [numsObj[missingEle], i];
  //     } else {
  //       numsObj[nums[i]] = i;
  //     }
  //   }

  //OR
  let numsObj = new Map();
  for (let i = 0; i < nums.length; i++) {
    const missingEle = target - nums[i];

    if (numsObj.has(missingEle)) {
      return [numsObj.get(missingEle), i];
    }
    numsObj.set(nums[i], i);
  }
  return [];
};

// console.log(twoSum([4, 5, 10], 9));

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4,5,3,6], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([3, 13, 2, 33, 8, 3], 6));

const findDuplicates = (arr) => {
  //   const extra = [];
  //   const duplicate = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (extra.includes(arr[i]) && !duplicate.includes(arr[i])) {
  //       duplicate.push(arr[i]);
  //     } else {
  //       extra.push(arr[i]);
  //     }
  //   }
  //   return duplicate;

  //OR

  const arrObj = {};
  const duplicate = [];

  for (let ele of arr) {
    arrObj[ele] = arrObj[ele] + 1 || 1;
  }
  for (let key in arrObj) {
    if (arrObj[key] > 1) {
      duplicate.push(+key);
    }
  }

  return duplicate;
};

// console.log(findDuplicates([1, 2, 3, 4, 3, 5, 1]));
// console.log(findDuplicates([1, 1, 1, 1, 2, 3, 44, 2, 6, 5, 1]));

// console.log(findDuplicates([3, 3, 3, 3]));

const commonElement = (arr1, arr2) => {
  let flag = false;

  //   O(n2) => O(length of arr1 * length of arr2)

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr2.includes(arr1[i])) {
  //       flag = true;
  //     }
  //   }
  //   return flag;

  //   O(n) =>  O(n+m)

  //OR
  const arrSet = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (arrSet.has(arr2[i])) {
      return true;
    }
  }
  return false;
};

// console.log(commonElement([2, 3, 22], [1, 4, 5, 4, 66, 12, 42, 22]));

function twoPointerArr(arr, target) {
  //Time complexity O(n)2
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // -----------------Two sum solution aprroach
  //Time complexity O(n)
  // const obj = {};
  // for (let i = 0; i < arr.length; i++) {
  //   const missingEle = target - arr[i];
  //   if (missingEle in obj) {
  //     return [obj[missingEle], i];
  //   } else {
  //     obj[arr[i]] = i;
  //   }
  // }
  //-----------------------------Two Pointer approach
  // Time complexity O(n)
  // Two pointer approach is array index and

  // NOTE:Main rule of this approach is your array must be sorted

  // There are two pointer in this
  // 1)Low 2) high

  let low = 0; //Arr first element
  let high = arr.length - 1; //Arr last element

  while (low < high) {
    if (arr[low] + arr[high] === target) return [low, high];
    else if (arr[low] + arr[high] > target) {
      high--;
    } else if (arr[low] + arr[high] < target) {
      low--;
    }
  }
}

// ----------------------------Interview DSA------------------------------------------

const test = ["apple", "banana", "watermalon", "jsdidisspd"];

const findLogestString = (array) => {
  let largestStr = "";

  for (let i = 0; i < array.length; i++) {
    if (largestStr.length < array[i].length) {
      largestStr = array[i];
    }
  }
  return largestStr;
};

console.log("strrrrrrrrrrrrrrrr", findLogestString(test));

const findZeroTriplets = (arr) => {
  let finalArr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          finalArr = [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return finalArr;
};

console.log("zerrrrrrrrrrrr", findZeroTriplets([0, -1, 2, -3, 1]));

const findMaxAndMin = (arr) => {
  let max = arr[1];
  let min = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
};

console.log("sollllllllllllllll", findMaxAndMin([3, 2, 4, 1]));

const removeElementFromArr = (arr, ele) => {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  // let newArr=[]
  // if (arr[i] !== ele) {
  //   newArr.push(arr[i]);
  // }
  // if (arr[i] === ele) {
  //   arr.splice(i, 1);
  // }
  // }
  // return arr;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== ele) {
      arr[i] = arr[j];
      i++;
    }
  }
  return arr.slice(0, i);
};

console.log(
  "dellllllllllllllllll",
  removeElementFromArr([3, 2, 3, 4, 3, 2, 1, 12, 1, 2, 3], 2)
);

// -------------------------------HashTables------------------------------------------------

const twoSumSolution = (arr, target) => {
  let hashObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hashObj) {
      return [hashObj[arr[i]], i];
    } else {
      hashObj[target - arr[i]] = i;
    }
  }
};

console.log("ttttttttttttttttt", twoSumSolution([3, 2, 4, 5, 3, 6], 6));

const findDuplicatesFromArr = (arr) => {
  ///////////FIrst
  // const finalAns = new Set();
  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (!finalAns.has(arr[i])) {
  //     finalAns.add(arr[i]);
  //   } else {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
  //OR
  // const obj = {};
  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] in obj) {
  //     newArr.push(arr[i]);
  //   } else {
  //     obj[arr[i]] = i;
  //   }
  // }
  // console.log("finnnnnnn", obj);
  // return newArr;
  //OR
  const obj = {};
  const duplicate = [];
  for (let ele of arr) {
    obj[ele] = obj[ele] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      duplicate.push(+key);
    }
  }
  return duplicate;
};

console.log(
  "dupppppppppppppp",
  findDuplicatesFromArr([1, 2, 3, 3, 4, 5, 4, 1])
);

const itemInCommon = (arr1, arr2) => {
  // const arr1Set = new Set(arr1);
  // let bool = false;
  // for (let i = 0; i < arr2.length; i++) {
  //   if (arr1Set.has(arr2[i])) {
  //     bool = true;
  //   }
  // }
  // return bool;

  const obj = {};
  let bool = false;

  for (let key in arr1) {
    obj[arr1[key]] = key;
  }
  for (let ele of arr2) {
    if (ele in obj) {
      bool = true;
    }
  }
  return bool;
};

console.log(
  "commmmmmmmmmmmmmmm",
  itemInCommon([1, 4, 5], [2, 3, 5, 3, 77, 54])
);

// -----------------------------Two pointer approach with two sum----------------------------------
// 1st rule -> this approach only works on the sorted array
// 2nd rule -> two pointes are low and high
const twoPointerArrSolution = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[low] + arr[high] === target) {
      return [low, high];
    } else if (arr[low] + arr[high] > target) {
      high--;
    } else if (arr[low] + arr[high] < target) {
      low++;
    }
  }
};

console.log(
  "pointerrrrrrrrrrrrrrrrrrrr",
  twoPointerArrSolution([2, 4, 6, 8, 10], 18)
);
