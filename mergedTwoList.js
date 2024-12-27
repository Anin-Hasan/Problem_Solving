function mergedTwoList(list1, list2) {
  let dummy = new ListNode(0);
  let prev = dummy;
  let p1 = list1,
    p2 = list2;
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      prev.next = p1;
      p1 = p1.next;
    } else {
      prev.next = p2;
      p2 = p2.next;
    }
    prev = prev.next;
  }
  prev.next = p1 !== null ? p1 : p2;

  return dummy.next;
}
list1 = [1, 2, 4];
list2 = [1, 3, 4];
const result = mergedTwoList(list1, list2);
console.log(result);
