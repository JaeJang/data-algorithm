class Solution:
            
    """
    aibohphobia
    itopinonavevanonipoti
    abbcbba
    abbbba
    abbabbaec
    baabad
    """

    # expand from middle 
    def longestPalindrome(self, s: str) -> str:
        if len(s) == 1:
            return s
        
        start = 0
        end = 0
        
        for i in range(len(s)):
            longer = max(self.expandFromMiddle(s, i ,i), self.expandFromMiddle(s, i ,i + 1))
            if end - start < longer:
                start = i - ((longer - 1) // 2)
                end = i + (longer // 2)
        
        return s[start:end+1]
        
    def expandFromMiddle(self, s: str, left: int, right: int) -> int:
        if not s or left > right:
            return 0;
        
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        
        return right - left - 1