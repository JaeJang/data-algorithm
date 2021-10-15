class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        output = 0
        
        while left < right:
            
            if height[left] < height[right]:
                output = max(output, (right - left) * height[left])
                left += 1
            else:
                output = max(output, (right - left) * height[right])
                right -= 1
        
        return output
        