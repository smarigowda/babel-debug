
let request = require('request-promise');
import delay from './modules/delay'
let p1 = request('http://www.google.com/');
let p2 = delay(500).then(d => {
  throw new Error('timed out...');
});
let pArray = [p1, p2];
Promise.race(pArray)
.then(text => { console.log(text)})
.catch(e => console.log(e));
