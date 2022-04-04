/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let sizeA = sizeB = 0;
    
    let currentA = headA;
    while (currentA) {
        ++sizeA;
        currentA = currentA.next;
    }
    let currentB = headB;
    while (currentB) {
        ++sizeB;
        currentB = currentB.next;
    }
    
    const diff = Math.abs(sizeA - sizeB);
    if (sizeA > sizeB) {
        currentA = moveForward(headA, diff);
        currentB = headB;
    } else if (sizeA < sizeB) {
        currentA = headA;
        currentB = moveForward(headB, diff);
    } else {
        currentA = headA;
        currentB = headB;
    }
    
    while (currentA && currentB) {
        if (currentA === currentB) return currentA;
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return null;
};

function moveForward(node, number) {
    while(node && number > 0) {
        --number;
        node = node.next;
    }
    return node;
}