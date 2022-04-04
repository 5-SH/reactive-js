const { of, asyncScheduler, async } = require('rxjs');
const { subscribeOn, observeOn, tap } = require('rxjs/operators');

const tapper = x => console.log(`${x} IN`);
const observer = x => console.log(`${x} OUT`);

of(1, 2, 3).pipe(
  tap(tapper),
  subscribeOn(asyncScheduler)
).subscribe(observer);

of(4, 5, 6).pipe(
  tap(tapper)
).subscribe(observer);

of('A', 'B', 'C').pipe(
  tap(tapper),
  observeOn(asyncScheduler)
).subscribe(observer);

of('D', 'E', 'F').pipe(
  tap(tapper)
).subscribe(observer);