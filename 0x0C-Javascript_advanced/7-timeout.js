console.log('Start of the execution queue')
setTimeout(() => {
  console.log('Final code block to be executed') }, 0);
for (let index = 1; index <= 100; index++) {
  console.log(index)
}
console.log('End of loop printing');
