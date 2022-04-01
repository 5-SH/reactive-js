// 출처: https://blog.logrocket.com/understanding-rxjs-observables/
/**
 * Understanding Observables: pull vs push
 * To understand Observables, you have to first understand the pull and push context. 
 * In JavaScript, there are two systems of communication called push and pull.
 * A pull system is basically a function. A function is usually first defined (a process called production) and 
 * then somewhere along the line called (this process is called consumption)to return the data or value in the function.
 * For functions, the producer (which is the definition) does not have any idea of 
 * when the data is going to be consumed, 
 * so the function call literally pulls the return value or data from the producer.
 * A push system, on the other hand, control rests on the producer, the consumer does not know exactly 
 * when the data will get passed to it. 
 * A common example is promises in JavaScript, promises (producers) push already resolved value to call-backs (consumers).
 * Another example is RxJS Observables, 
 * Observables produces multiple values called a stream (unlike promises that return one value) 
 * and pushes them to observers which serve as consumers.
 */

/**
 * What is a Stream?
 * A stream is basically a sequence of data values over time, 
 * this can range from a simple increment of numbers printed in 6 seconds (0,1,2,3,4,5) or coordinates printed over time, 
 * and even the data value of inputs in a form or chat texts passed through web sockets or API responses. 
 * These all represent data values that will be collected over time, hence the name stream.
 */

/**
 * What are Observables?
 * Streams are important to understand because they are facilitated by RxJS Observables. 
 * An Observable is basically a function that can return a stream of values to an observer over time, 
 * this can either be synchronously or asynchronously. 
 * The data values returned can go from zero to an infinite range of values.
 */

/**
 * Observers and subscriptions
 * For Observables to work there needs to be observers and subscriptions. 
 * Observables are data source wrappers and then the observer executes some instructions 
 * when there is a new value or a change in data values. 
 * The Observable is connected to the observer who does the execution through subscription, 
 * with a subscribe method the observer connects to the observable to execute a code block.
 */


const { of, from, range, generate } = require('rxjs');

const obs1$ = of(1, 2, 3, 4, 5)
const obs2$ = from([6, 7, 8, 9, 10])
const obs3$ = range(11, 5)
const obs4$ = generate(
  15, x => x < 30, x => x + 2
)

//obs1$.subscribe(item => console.log(`of: ${item}`))
//obs2$.subscribe(item => console.log(`from: ${item}`))
//obs3$.subscribe(item => console.log(`range: ${item}`))
//obs4$.subscribe(item => console.log(`generate: ${item}`))