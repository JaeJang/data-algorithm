class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = [];
        
        for x in nums:
            result.append([x]);
            
        for i in range(len(nums) -1):
            result = [perm+[num] for perm in result for num in nums if num not in perm];

        return result