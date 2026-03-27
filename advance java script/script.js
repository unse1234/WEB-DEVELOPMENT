  
//  function details(adress ,cb)
//  { 
//     console.log(`adress recieved ${adress}`);
//     console.log('fetching details');
//     setTimeout(() => {
  
//         cb( `details of ${adress} are: 1. near bus stop 2. near market 3. near school `);
//     }, 3000);
//  }

//   details("dhok kala khan rawalpindi", function(details){
//     console.log(details);
//   });
// cd path/to/webdevelopment

// operate(5, 3, add);
// operate(5, 3, multiply);

// function operate(num1, num2, operatio) {
//  console.log(operatio(num1, num2));
// }

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

//  // Output: 8
// operate(5, 3, multiply);





// function getData(username,cb    ) {
//     const data = 'data recieved';
//     cb(data);
// }    


// getData("unse",function(data){
//     console.log(data);
// });
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// function process(callback) {
//   console.log("Processing...");
//   callback();
// }

// process(() => console.log("Callback executed"));

// console.log("End");
function getuser(email,pass,cb)
{
    console.log(`email and pass recieved ${email} and ${pass}`);
    console.log('fetching details');
    setTimeout(() => {
        cb({id:1,name:"ali"});
    }, 2000);

}

function getuserprofile(id,cb){
    console.log(`id recieved ${id}`);
    console.log('fetching profile');    
    setTimeout(() => {
        cb({age:22,city:"karachi"});
    }, 1000);

}
getuser("123@gmail.com","12345678",function(details){
    getuserprofile(details.id,function(profile){
        console.log(profile);
    });
});