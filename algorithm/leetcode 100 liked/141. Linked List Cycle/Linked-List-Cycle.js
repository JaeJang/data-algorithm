/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


// Without set
var hasCycle = function(head) {
    if (!head) return false;
    
    let inorder = head;
    let faster = head;
    
    while(faster.next?.next) {
        inorder = inorder.next;
        faster = faster.next.next;
      if (inorder === faster) return true;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const seen = new Set();
    let current = head;
    
    while(current) {
        if (seen.has(current)) return true;
        seen.add(current);
        current = current.next;
    }
    
    return false;
};