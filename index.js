console.log('This is the index.js file');
const fs = require('fs');

const a=10;

setImmediate(() => {
  console.log('This is setImmediate callback');
});

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});

setTimeout(() => {
  console.log('This is setTimeout callback');
}, 0);

function printA(){
    console.log(a ,"===a");
}
printA();
console.log ('End of index.js execution');

// 