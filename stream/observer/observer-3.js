const { interval } = require('rxjs');

const obs$ = interval(1000);
const subscription = obs$.subscribe(console.log);

setTimeout(_ => subscription.unsubscribe(), 5500);
setTimeout(_ => obs$.subscribe(console.log), 10500);