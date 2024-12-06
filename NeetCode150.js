// Q:1: Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// class Solution {
//   hasDuplicate(nums) {
//     let isDuplicate = false;
//     const varObj = {};
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] in varObj) {
//         isDuplicate = true;
//       } else {
//         varObj[nums[i]] = i;
//       }
//     }
//     return isDuplicate;
//   }
// }

// const solution1 = new Solution();
// console.log(solution1.hasDuplicate([1, 2, 3, 4, 3]));

// Q:2 :  An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Solution :

class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    // return s.split("").every((e) => t.includes(e));
    // return s.split('').sort().join("") === t.split('').sort().join("")

    let charOfObj = {};
    let flag = false;
    for (let char of s) {
      // if(charOfObj[char]){
      //     charOfObj[char] = 1
      // }
      charOfObj[char] = (charOfObj[char] || 0) + 1;
    }
    for (let char of t) {
      if (!charOfObj[char]) {
        flag = false;
        return { flag, charOfObj };
      }
      charOfObj[char] -= 1;
    }
    console.log("charObj", charOfObj);
    flag = true;
    return { flag, charOfObj };
  }
}

const solution2 = new Solution();
// console.log(solution2.isAnagram("racecar", "carrace"));
// console.log(solution2.isAnagram("bbcb", "ccbc"));

//--------------------------------- Two sum--------------------------------

class TwoSum {
  twoSum(nums, target) {
    let hashObj = {};

    for (let i = 0; i < nums.length; i++) {
      const missingEle = target - nums[i];
      if (missingEle in hashObj) {
        return [hashObj[missingEle], i];
      } else {
        hashObj[nums[i]] = i;
      }
    }
  }
}

const ans = new TwoSum();
console.log(ans.twoSum([3, 4, 8, 6], 12));

const groupAnagram = (strs) => {
  let finalMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");
    if (finalMap.has(sortedString)) {
      finalMap.get(sortedString).push(strs[i]);
    } else {
      finalMap.set(sortedString, [strs[i]]);
    }
  }
  return Array.from(finalMap, ([key, value]) => value);
};

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
// Ans
// [["hat"],["act", "cat"],["stop", "pots", "tops"]]

const topKFrequent = (nums, k) => {
  const hashObj = {};
  const formArr = [];
  const result = [];

  for (let i = 0; i < nums.length + 1; i++) {
    formArr.push([]);
  }
  for (let i = 0; i < nums.length + 1; i++) {
    hashObj[nums[i]] = (hashObj[nums[i]] || 0) + 1;
  }
  for (let key in hashObj) {
    formArr[hashObj[key]].push(Number(key));
  }
  for (let i = formArr.length - 1; i >= 0; i--) {
    if (result.length !== k) {
      for (let ele of formArr[i]) {
        if (!isNaN(ele)) {
          result.push(ele);
        }
      }
    }
  }
  return result;
};

console.log("toppppppp", topKFrequent([1, 2, 2, 3, 3, 3], 2));
// console.log("toppppppp", topKFrequent([6, 5, 5, 8, 8, 8], 2));

// console.log("toppppppp", topKFrequent([7, 7], 1)); //[7]

console.log("toppppppp", topKFrequent([1], 1));

// If final number is more than the nearest number then reduce the number from left side and less so then add in righ
const romanObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// const romanValues = [1, 5, 10, 50, 100, 500, 1000];

const romanToInt = (romanNumber) => {
  let target = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanObj[romanNumber[i + 1]] > romanObj[romanNumber[i]]) {
      target = target - romanObj[romanNumber[i]];
    } else {
      target += romanObj[romanNumber[i]];
    }
  }
  return target;
};

console.log("romannnnnnnnnnnnn", romanToInt("MCMXCIV")); //1994
console.log("romannnnnnnnnnnnn", romanToInt("LVIII")); //58

const openParentheses = (str) => {
  /////////1 fail
  // const hashObj = {};
  // let bool = false;
  // for (let i = 0; i < str.length; i++) {
  //   if (Object.keys(hashObj).length) {
  //     if (
  //       (str[i] === ")" && "(" in hashObj && i - (hashObj["("] % 2)) ||
  //       (str[i] === "}" && "{" in hashObj && i - (hashObj["{"] % 2)) ||
  //       (str[i] === "]" && "[" in hashObj && i - (hashObj["["] % 2))
  //     ) {
  //       bool = true;
  //     }
  //   } else {
  //     if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
  //       bool = false;
  //     } else {
  //       hashObj[str[i]] = i;
  //     }
  //   }
  // }
  // return bool;

  let bool = false;

  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "(" || str[i] === "[" || str[i] === "{") &&
      str.length % 2 === 0
    ) {
      arr.push(str[i]);
    } else {
      const lastEle = arr.pop();
      if (
        (str[i] === ")" && lastEle === "(") ||
        (str[i] === "]" && lastEle === "[") ||
        (str[i] === "}" && lastEle === "{")
      ) {
        bool = true;
      } else {
        bool = false;
        return bool;
      }
    }
  }
  if (arr.length) {
    return false;
  }
  return bool;
};

// console.log("booooooooolllllllllll", openParentheses("()"));
// console.log("booooooooolllllllllll", openParentheses("()[]{}"));
// console.log("booooooooolllllllllll", openParentheses("(]"));
// console.log("booooooooolllllllllll", openParentheses("([])"));
// console.log("booooooooolllllllllll", openParentheses("([)]"));
// console.log("booooooooolllllllllll", openParentheses("(){}}{"));
// console.log("booooooooolllllllllll", openParentheses("({{{{}}}))"));
console.log("booooooooolllllllllll", openParentheses("[[[]"));

// Won't work because every time it calls the prevTime initialized and no hold the previous time value everytime will be undefined
// const throttleFunc = (func, delays) => {
//   let prevTime;

//   let newTime = new Date().getTime();

//   if (newTime - prevTime > delays) {
//     prevTime = newTime;
//     return func();
//   }
// };

// Closure Throttle check

const throttleFunction = (func, delays) => {
  let prevTime = 0;

  // Now closure will remember the old refrence of prevTime
  return (...args) => {
    // let newTime = new Date().getTime();

    // if (newTime - prevTime > delays) {
    //   prevTime = newTime;
    //   return func(...args);
    // }
    console.log("prevvvvvvvvv", prevTime);
    prevTime++;
  };
};

// const ref = throttleFunction(() => {
//   console.log("forrrrrrrrrrrrrr");
// });

// for (let i = 0; i < 5; i++) {
//   ref();
// }

const removeDuplicatesFromSortedArr = (nums) => {
  // const hasObj = {};
  // let k = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] in hasObj) {
  //     nums.splice(i, 1);
  //     nums.unshift("_");
  //   } else {
  //     hasObj[nums[i]] = i;
  //     k++;
  //   }
  // }
  // nums.reverse().sort((a, b) => a - b);
  // console.log("nnnnnnnnnnnnnnnnn", nums);
  // return k;
  //OR
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
  //OR
  // let last = 0;
  // for (let current = 0; current < nums.length; current++) {
  //   if (nums[last] == nums[current]) continue;
  //   last += 1;
  //   nums[last] = nums[current];
  // }
  // console.log("nnnnnnnnnnnnnnnn", nums);
  // return last + 1;
};

console.log(removeDuplicatesFromSortedArr([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicatesFromSortedArr([-3, -1, 0, 0, 0, 3, 3]));

// console.log(removeDuplicatesFromSortedArr([1, 1, 2]));
