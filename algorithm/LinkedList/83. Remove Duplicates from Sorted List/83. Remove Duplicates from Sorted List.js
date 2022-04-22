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
 var deleteDuplicatesV2 = function(head) {
    let cur = head;
        
    while (cur) {
        if (!cur.next) break;
        
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    
    return head;
};

 var deleteDuplicates = function(head) {
    if (!head?.next) return head;
        
    let prevNode = head;
    let cur = head.next;
        
    while (cur) {
        if (cur.val === prevNode.val) {
            prevNode.next = cur.next;
        } else {
            prevNode = cur;
        }
        cur = cur.next;
    }
    
    return head;
};