nums1 = [1, 1, 2]; //Output: 2, nums = [1,2,_]
nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let expectedNums = [];
  let count = 0;
  //   let k = 0;

  if (nums !== null) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1]) {
        expectedNums[count] = nums[i];
        count++;
      } else {
        k++;
      }
    }
    let d = nums.length - expectedNums.length;
    for (let i = 0; i < d; i++) {
      expectedNums.push("_");
    }

    console.log(k, expectedNums);
  }
};

removeDuplicates(nums1);
