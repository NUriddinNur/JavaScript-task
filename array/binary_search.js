function binary_search(nums, target) {
    let l = 0;
    let h = nums.length - 1;

    while(l <= h) {
        let m = Math.floor((h + l) / 2);
        if (nums[m] === target) {
            return m;
        }
        else if (nums[m] > target) {
            h = m - 1;
        }else {
            l = m + 1
        }
    }
    return false
}
console.log(binary_search([-1,0,3,5,9,12], 12));


