/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseListV3 = function(head) {
    let newHead = null;
    
    while(head) {
        const next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    
    return newHead;
};

var reverseListV4 = function(head) {
    return reverseRecur(head, null);
};

function reverseRecurV2(head, newHead) {
    if (!head) return newHead;
    
    const next = head.next;
    head.next = newHead;
    return reverseRecurV2(next, head);
}

 var reverseList = function(head) {
    if (!head || !head.next) return head;
    
    let prevNode = head;
    let current = head.next;
    head.next = null;
    
    while(current) {
        const nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    return prevNode;
};


var reverseListV2 = function(head) {
    if (!head || !head.next) return head;
    
    let newHead;
    const reverseRecur = (node) => {
        if (!node.next) {
            newHead = node;
            return node;  
        }
        const prev = reverseRecur(node.next);
        prev.next = node;
        return node;
    }
    reverseRecur(head).next = null;
    
    return newHead;
};