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