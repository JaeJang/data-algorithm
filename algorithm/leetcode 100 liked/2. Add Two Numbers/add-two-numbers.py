# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# cleaner 
    def addTwoNumbersV2(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        result = ListNode()
        current = result
        while l1 or l2 or carry:
            if l1:
                carry += l1.val
                l1 = l1.next
            if l2:
                carry += l2.val
                l2 = l2.next
            
            val = carry % 10
            carry = carry // 10
            
            current.next = ListNode(val)
            current = current.next
        return result.next
        
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        add = l1.val + l2.val
        carry = add // 10
        result = ListNode(add % 10)
        
        l1Next, l2Next = l1.next, l2.next
        currentNode = result
        while l1Next or l2Next:
            if l1Next and l2Next:
                add = l1Next.val + l2Next.val + carry
                carry =  add // 10
                currentNode.next = ListNode(add % 10)
                
                l1Next, l2Next = l1Next.next, l2Next.next
            else:
                if l1Next:
                    add = l1Next.val + carry
                    carry =  add // 10
                    currentNode.next = ListNode(add % 10)
                    l1Next = l1Next.next
                else:
                    add = l2Next.val + carry
                    carry =  add // 10
                    currentNode.next = ListNode(add % 10)
                    l2Next = l2Next.next
            currentNode = currentNode.next
        
        if carry == 1:
            currentNode.next = ListNode(1)
        return result

    