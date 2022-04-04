/**
 * Observable 가 complete 되면 마지막 값을 observer 에게 보냄.
 * complete 이벤트를 기다리고 마지막 단일 값을 보내는 점에서
 * last() operator 와 비슷하다.
 */

const { AsyncSubject } = require('rxjs');
const subject = new AsyncSubject();

subject.subscribe(x => console.log('A: ' + x));

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe(x => console.log('B: ' + x));

subject.next(4);
subject.next(5);

subject.subscribe(x => console.log('C: ' + x));

subject.next(6);
subject.next(7);
subject.complete();