# queue
A no dependency implementation of a queue in JavaScript. Can be LIFO or FIFO.

```javascript
var fifo, lifo;

fifo = new Queue([1,2,3], true); // FIFO is true
fifo.print(); // First - 1, 2, 3 - Last

console.log('Enqueued: ', fifo.enqueue(4)); // Enqueued:  4
fifo.print(); // First - 1, 2, 3, 4 - Last

console.log('Next: ', fifo.next()); // Next:  1
console.log('Dequeued:', fifo.dequeue()); // Dequeued: 1
fifo.print(); // First - 2, 3, 4 - Last

console.log('Next: ', fifo.next()); // Next:  2
console.log('Size: ', fifo.size); // Size:  3

lifo = new Queue([1,2,3], false); // FIFO is false
lifo.print(); // Last - 1, 2, 3 - First

console.log('Enqueued: ', lifo.enqueue(4)); // Enqueued:  4
lifo.print(); // Last - 1, 2, 3, 4 - First

console.log('Next: ', lifo.next()); // Next:  4
console.log('Dequeued:', lifo.dequeue()); // Dequeued: 4
lifo.print(); // Last - 1, 2, 3 - First

console.log('Next: ', lifo.next()); // Next:  3
console.log('Size: ', lifo.size); // Size:  3
```
