const { BehaviorSubject } = require('rxjs');

const subject = new BehaviorSubject(0);

subject.subscribe(x => console.log('A: ' + x));

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe(x => console.log('B: ' + x));
console.log('last value', subject.getValue());

subject.next(4);
subject.next(5);

console.log('last value', subject.getValue());