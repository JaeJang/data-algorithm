class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}
        
        for s in strs:
            sortedStr = ''.join(sorted(s))
            if sortedStr not in anagrams:
                anagrams[sortedStr] = [s]
            else:
                anagrams[sortedStr].append(s)
        return anagrams.values()