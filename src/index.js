import Person from './modules/person';
import delay from './modules/delay'

const jake = new Person('Jake');
const anon = new Person();
const santosh = new Person('Santosh');

jake.speak();
anon.speak();
delay(10000).then(async () => console.log('resolved after some delay...'));
santosh.speak();
