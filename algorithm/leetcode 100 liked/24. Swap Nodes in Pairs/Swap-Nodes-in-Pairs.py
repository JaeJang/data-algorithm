# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head;
        
        tmpHead = ListNode(0, head);
        
        parentNode = tmpHead;
        
        while parentNode.next and parentNode.next.next:
            lastNode = parentNode.next.next;
            middleNode = parentNode.next;

            middleNode.next = lastNode.next;
            lastNode.next = middleNode;
            parentNode.next = lastNode;
            
            parentNode = middleNode;

        return tmpHead.next;