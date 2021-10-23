from typing import Optional

#Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        newList = currentNode = ListNode(0)
        
        while l1 and l2:
            if l1.val > l2.val:
                currentNode.next = ListNode(l2.val)
                l2 = l2.next
            else:
                currentNode.next = ListNode(l1.val)
                l1 = l1.next
            currentNode = currentNode.next
        
        leftList = l1 if l1 else l2
        
        currentNode.next = l1 if l1 else l2
        
        return newList.next
        