// ❓ Q2: Search Optimization (Debounce)

// Ek search input hai jahan user fast type karta hai.

// 👉 Problem:
// Har key press par API call ho rahi hai (100+ calls)

// 👉 Task:
// Aisa function design karo jo:

// API ko delay kare
// Sirf last input par call ho
// 💡 Kya samajhna hai:
// Closures
// Timer control
// Performance optimization

// 👉 Real-world:
// Google search, YouTube search
function debounce(func, delay) {
    let timer;
return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {  
func.call(args[0]);
    }, delay);
}
}
document.getElementById('search')
.addEventListener('input', debounce(function() {
    console.log('API call for:', this.data);    
}, 1000));