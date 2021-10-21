class Solution:
    def isValid(self, s: str) -> bool:
        parenthese_mapping = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        
        
        def isOpenning(c): 
            return True if c == '(' or c == '[' or c == '{' else False
        
        stack = []
        
        for c in s:
            if isOpenning(c):
                stack.append(c)
            else:
                try:
                    last = stack.pop()
                except IndexError:
                    return False
                
                if last != parenthese_mapping[c]:
                    return False
        
        return True if len(stack) == 0 else False
                