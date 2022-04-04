const { from, of, Observable } = require('rxjs');
const { count, max, min, reduce } = require('rxjs/operators');

// 산수 관련
const obs1$ = of(4, 2, 6, 10, 8);
const obs2$ = new Observable(sub => {
  sub.next(4);
  sub.next(2);
  sub.complete();
  sub.next(6);
  sub.next(8);
  sub.next(10);
})

obs1$.pipe(count()).subscribe(x => console.log('count: ' + x));

obs1$.pipe(max()).subscribe(x => console.log('max: ' + x));
obs2$.pipe(max()).subscribe(x => console.log('max: ' + x));

obs1$.pipe(min()).subscribe(x => console.log('min: ' + x));
obs2$.pipe(min()).subscribe(x => console.log('min: ' + x));

obs1$.pipe(reduce((acc, x) => acc + x, 0)).subscribe(x => console.log('reduce: '+ x));
obs2$.pipe(reduce((acc, x) => acc + x, 0)).subscribe(x => console.log('reduce: '+ x));

// 선택 관련
const { first, last, elementAt, filter, distinct } = require('rxjs/operators');

const obs3$ = from([
    9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
]);
const obs4$ = new Observable(sub => {
  sub.next(9);
  sub.next(3);
  sub.next(10);
  sub.next(5);
  sub.next(1);
  sub.next(10);
  sub.next(9);
  sub.next(9);
  sub.complete();
  sub.next(1);
  sub.next(4);
  sub.next(1);
  sub.next(8);
  sub.next(6);
  sub.next(2);
  sub.next(7);
  sub.next(2);
  sub.next(5);
  sub.next(5);
  sub.next(10);
  sub.next(2);
});

obs3$.pipe(first()).subscribe(x => console.log('first: ' + x));

obs3$.pipe(last()).subscribe(x => console.log('last: ' + x));
obs4$.pipe(last()).subscribe(x => console.log('last: ' + x));

obs3$.pipe(elementAt(5)).subscribe(x => console.log('elementAt: ' + x));

obs3$.pipe(distinct()).subscribe(x => console.log('distinct: ', x));
obs4$.pipe(distinct()).subscribe(x => console.log('distinct: ', x));

obs3$.pipe(filter(x => x % 2 === 1)).subscribe(x => console.log('filter: ' + x));

// tap
const { tap } = require('rxjs/operators');

from([
    9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
]).pipe(
    tap(x => console.log('-------------- 처음 탭: ' + x)),
    filter(x => x % 2 === 0),
    tap(x => console.log('--------- 필터 후: ' + x)),
    distinct(),
    tap(x => console.log('중복 제거 후: ' + x)),
).subscribe(x => console.log('발행물: ' + x))