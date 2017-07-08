export default function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// let result = delay(5000).then(d => {
//   console.log('promise is now resolved...after 5 seconds');
//   console.log(result);
// }).then(d => {
//   console.log(result);
//   debugger;
// })
// console.log(result);