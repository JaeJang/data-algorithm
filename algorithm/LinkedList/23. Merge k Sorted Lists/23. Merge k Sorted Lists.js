/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    while(lists.length > 1) {
        const mergedLists = []
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i+1] : null;
            mergedLists.push(mergeTwoList(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0];
};

function mergeTwoList(l1, l2) {
    const tmpHead = new ListNode();
    let cur = tmpHead;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;
    
    return tmpHead.next;
}

/*
[[1,4,5],[1,3,4],[2,6],[4,6,8]]

[1,4,5],[1,3,4] - merge
[2,6],[4,6,8] - merge

[[1,1,3,4,4,5], [2,4,6,6,8]]

[1,1,3,4,4,5], [2,4,6,6,8] - merge

[[1,1,2,3,4,4,4,5,6,8]]
*/