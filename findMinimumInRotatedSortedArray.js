// wystarczy środek porównać z skrajnymi a nie skrajne ze sobą
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) { 
        let m = Math.floor((l + r) / 2);

        if (nums[m] < nums[r]) {
            r = m; 
        } else {
            l = m + 1; 
        }
    }

    return nums[l]; 
};

// tak nie róbmy ale też działa - za bardzo sobie skomplikowałam XDD
var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1
    let m = 0
    let min = nums[m]

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        
        if (nums[m] < min) {
            min = nums[m]
        }


        if (nums[m - 1] > nums[m + 1]) {
            if (nums[l] > nums[r]) {
                if (nums[m + 1] <= nums[r]) {
                    l = m + 1
                } else {
                    r = m - 1
                }

            } else  {
                if (nums[m + 1] <= nums[l]) {
                    l = m + 1
                } else {
                    r = m - 1
                }
            }
        } else  {
            if (nums[l] > nums[r]) {
                if (nums[r] >= nums[m - 1]) {
                    r = m - 1
                }
                else {
                    l = m + 1
                }

            } else {
                if (nums[l] <= nums[m - 1]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
        }
    }

    return min
};
