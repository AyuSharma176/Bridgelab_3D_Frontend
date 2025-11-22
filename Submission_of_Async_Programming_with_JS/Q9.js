// Q9 – Debugging the Event Loop

/*
PREDICTED OUTPUT (before running):

1. Script start         (synchronous)
2. Script end           (synchronous)
3. Promise callback     (microtask)
4. Timeout callback     (macrotask)

Reason:
- Synchronous code executes first.
- Microtasks (Promises) always run before macrotasks (setTimeout).
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");
