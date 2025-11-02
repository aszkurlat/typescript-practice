// 📘 Arrow Functions in TypeScript 
// -------------------------
// Arrow functions are a shorter way to write functions.
// They're often used for simple one-line logic or callbacks.

// -------------------------
// ✅ Basic Arrow Function (no params)
// -------------------------

console.log("\n-------------------------")
console.log("➡️ Normal Function")
console.log("-------------------------\n")

// This is a regular function declaration.
function sayHello(): void {
    console.log("Hello!")
}

// You can call it like this:
sayHello()

console.log("\n-------------------------")
console.log("➡️ Basic Arrow Function (no params)")
console.log("-------------------------\n")

const sayHelloToo = (): void => {
    console.log("Hello!")
}

sayHelloToo()

// That can also be written in a more concise way:

const sayHelloAgain = (): void => console.log("Hello!")

sayHelloAgain()
// -------------------------
// 🔢 Arrow Function with Parameters
// -------------------------
// You can add parameters inside the parentheses

console.log("\n-------------------------")
console.log("🔢 With Parameters")
console.log("-------------------------\n")

const greet = (name: string): void => {
    console.log(`Hi, ${name}!`)
}

greet("Alice")

const add = (a: number, b: number): number => {
    return a + b
}

console.log("Add result:", add(5, 3)) // 8

// -------------------------
// ✅ One-liner Arrow Functions
// -------------------------
// If the function has only one expression, you can skip `{}` and `return`

console.log("\n-------------------------")
console.log("✅ One-liner Arrow Functions")
console.log("-------------------------\n")

const double = (x: number): number => x * 2
console.log("Double 4:", double(4)) // 8

// -------------------------
// ➡️ Callbacks with Arrow Functions
// -------------------------
console.log("\n-------------------------")
console.log("➡️ Callbacks with Arrow Functions")
console.log("-------------------------\n")

const numbers = [1, 2, 3, 4, 5]

const squared = numbers.map((num: number): number => {
    return num * num
})

console.log("Squared numbers:", squared) // [1, 4, 9, 16, 25]

// we can also use one-liners here
const squaredToo = numbers.map(num => num * num)
console.log("Squared numbers (one-liner):", squaredToo) // [1, 4, 9, 16, 25]

// -------------------------
// - Use `const` to declare arrow functions (safer and recommended)
// - Use parentheses `()` around parameters
// - Use `{}` if you have more logic; otherwise, omit it for short expressions

// -------------------------
// ❓ When to use arrow functions?
// -------------------------
// - For short functions or inline logic
// - In array methods like `.map()`, `.filter()`
// - As callbacks (e.g. for events or timers)

// -------------------------
// 🧠 Summary:
// -------------------------
// const greet = (name: string) => { ... }
// const add = (a: number, b: number) => a + b
// const log = () => console.log("Hi")

// Arrow functions are a modern and clean way to define small functions.

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// • Function Expressions: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-expressions
// • This in Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#no_separate_this

export { }
