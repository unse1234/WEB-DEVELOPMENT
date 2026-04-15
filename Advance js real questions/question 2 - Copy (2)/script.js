// ❓ Q3: Multiple Async Handling

// Tumhe multiple async operations run karne hain (e.g. 5 APIs)

// 👉 Task:

// Sab complete hone ke baad ek combined result chahiye
// Agar ek bhi fail ho → pura process fail ho jaye
// 💡 Kya samajhna hai:
// Promise coordination
// Order maintain karna
// Failure propagation

// 👉 Hint:
// JS me already iska ek built-in solution hai 😉
 function  api1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result from API 1');
        }, 1000);
    });
}
function  api2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result from API 2');
        }, 1000);
    });
};
function  api3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result from API 3');
        }, 1000);
    });
};
function  api4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result from API 4');
        }, 1000);
    });
};
function  api5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result from API 5');
        }, 1000);
    });
};

Promise.all([api1(), api2(), api3(), api4(), api5()])
    .then(results => {
        console.log('All APIs completed successfully:', results);   })
    .catch(error => {
        console.error('One or more APIs failed:', error);
    });
