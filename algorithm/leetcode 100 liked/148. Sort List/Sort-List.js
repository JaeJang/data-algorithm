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
 var sortList = function(head) {
    if (!head ||!head.next) {
        return head;
    }
    
    const mid = getMid(head);
    
    const left = sortList(head);
    const right = sortList(mid);
    
    return merge(left, right);
};

function merge(left, right) {
    const tmpHead = new ListNode();
    let current = tmpHead;
    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    current.next = left ? left : right;
    
    return tmpHead.next;
}

function getMid(head) {
    let midPrev = null;
    while(head?.next) {
        midPrev = midPrev ? midPrev.next : head;
        head = head.next.next;
    }
    const mid = midPrev.next;
    midPrev.next = null;
    return mid;
}

/*
[-1,5,3,4,0]

    [-1,5,3]
        [-1,5]
            [-1]
            [5]
        [-1,5]
        [3]
    [-1,3,5]

    [4,0]
        [4]
        [0]
    [0,4]

[-1,0,3,4,5]


*/