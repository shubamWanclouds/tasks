let countCallWrapper = () => {
  let count = 0;
  let countCall = () => {
    console.log(`The function has been called ${++count} Times`);
  }
  return countCall;     
}
let functionCallCounter = countCallWrapper();
functionCallCounter();
functionCallCounter();
functionCallCounter();

let hittingApiInLoop = () =>{
  for( let i=0; i<5; i++) {
   let getPostsAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => {
     console.log(`API number ${i} has been executed successfully`)
    })
   }
   getPostsAPI();
  }
 }
 
hittingApiInLoop();