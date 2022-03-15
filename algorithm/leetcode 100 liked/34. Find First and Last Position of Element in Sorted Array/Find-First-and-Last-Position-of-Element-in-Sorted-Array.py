class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def binaySearch(start, end, nums, target):
            if start > end:
                return -1;
            
            if nums[start] == target:
                return start;
            if nums[end] == target:
                return end;
            
            mid = (start + end) // 2
            if nums[mid] == target:
                return mid;
            
            if nums[mid] > target:
                return binaySearch(start + 1, mid-1, nums, target)
            else:
                return binaySearch(mid + 1, end - 1, nums, target)
        
        result = binaySearch(0, len(nums) - 1, nums, target)
        if result == -1:
            return [-1,-1]
        
        start = end = result;

        for i in range(result, len(nums)):
            if nums[result] < nums[i]:
                break;
            if nums[result] == nums[i]:
                end = i;
                
        for i in reversed(range(result + 1)):
            if nums[result] > nums[i]:
                break;
            if nums[result] == nums[i]:
                start = i;
        return [start, end]
            