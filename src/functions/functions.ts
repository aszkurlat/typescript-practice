// ❓ What is a function?
// -------------------------
// A function is a reusable block of code that performs a task.
// You define it once, and call it whenever you need it.

console.log("\n-------------------------")
console.log("❓ What is a function?")
console.log("-------------------------\n")

// Example: sayHello function
function sayHello() {
    console.log("Hello, world!")
}

// Call the function
sayHello()

// -------------------------
// 🧮 Functions with parameters
// -------------------------
// Parameters let you pass data into a function

console.log("\n-------------------------")
console.log("🧮 Function with parameters")
console.log("-------------------------\n")

function greet(name: string) {
    console.log("Hello,", name)
}

greet("Anna") // "Hello, Anna"
greet("Krzysztof") // "Hello, Krzysztof"

// -------------------------
// 🔙 Functions that return values
// -------------------------
// A function can return a result using the `return` keyword

console.log("\n-------------------------")
console.log("🔙 Function with return value")
console.log("-------------------------\n")

function add(a: number, b: number): number {
    return a + b
}

// we can also write it like this
// function add(a: number, b: number): number {
//     const sum = a + b
//     return sum
// }

const sum = add(5, 1)
console.log("Sum:", sum) // 8

// -------------------------
// ✅ Function with type annotations
// -------------------------
// You can (and should) add types to parameters and return values

console.log("\n-------------------------")
console.log("✅ Function with types")
console.log("-------------------------\n")

function isAdult(age: number): boolean {
    return age >= 18
}

console.log("Is 20 an adult?", isAdult(20)) // true
console.log("Is 15 an adult?", isAdult(15)) // false

// -------------------------
// 🤔 Functions with no return value 
// -------------------------
console.log("\n-------------------------")
console.log("🤔 Function with no return value")
console.log("-------------------------\n")

// If a function doesn't return anything, you should use `void` type
function logMessage(message: string): void {
    console.log("Log:", message)
}

// This function does not return anything, it just logs a message
logMessage("This is a message") // Logs: "Log: This is a message"

// What does `void` mean?
// It means the function does not return a value. You can still call it, but you
// won't get anything back. It's useful for functions that perform actions like logging,
// updating UI, etc.

// -------------------------
// 🧠 Summary:
// -------------------------
// - Functions let you group code into reusable tasks
// - Use `function` keyword to declare them
// - You can pass values using parameters
// - Use `return` to send back a result
// - Always use type annotations for clarity and safety

// 📘 Function Parameters in TypeScript
// -------------------------
// 🎯 Why use parameters?
// -------------------------
// Parameters allow you to customize a function's behavior by passing values in.

console.log("\n-------------------------")
console.log("🎯 Function Parameters")
console.log("-------------------------\n")

function introduce(name: string, age: number): void {
    console.log(`My name is ${name} and I am ${age} years old.`)
}

introduce("Alice", 28)
introduce("Bob", 34)

// Required parameters must be provided when calling the function.
// If you don't provide them, TypeScript will show an error.

// ❌ This would cause an error (missing second argument):
// introduce("Charlie") // ❌ Error: Expected 2 arguments, but got 1.

// -------------------------
// ⚠️ Parameter order matters
// -------------------------
// TypeScript will match values based on their position.

console.log("\n-------------------------")
console.log("⚠️ Parameter Order Matters")
console.log("-------------------------\n")

function report(name: string, isAdmin: boolean): void {
    console.log(`${name} has admin access: ${isAdmin}`)
}

report("Anna", true) // ✅ Correct
// report(true, "Anna") // ❌ Error: wrong order

// -------------------------
// ❓ Optional Parameters
// -------------------------
// Use `?` to mark a parameter as optional.

console.log("\n-------------------------")
console.log("❓ Optional Parameters")
console.log("-------------------------\n")

function showStatus(username: string, isOnline?: boolean): void {
    console.log("Username:", username)
    console.log("Online status:", isOnline)
    // If isOnline is undefined, we can handle it gracefully
    if (isOnline) {
        console.log(`${username} is online.`)
    } else {
        console.log(`${username} is offline or status unknown.`)
    }
}

showStatus("Tom") // No second argument – isOnline is undefined
showStatus("Jane", true) // Second argument is provided

// -------------------------
// ⚙️ Default Parameters
// -------------------------
// You can set a default value in case no value is passed in.

console.log("\n-------------------------")
console.log("⚙️ Default Parameters")
console.log("-------------------------\n")

function calculatePrice(price: number, tax: number = 0.23): void {
    const total = price + price * tax
    console.log(`Total price (with tax): ${total}`)
}

calculatePrice(100) // Uses default tax 0.23
calculatePrice(100, 0.1) // Uses custom tax 0.1

// -------------------------
// 🧠 Summary:
// -------------------------
// - Parameters are inputs for functions
// - Use `name: type` syntax for each parameter
// - Parameter order is important
// - Always annotate parameter types for clarity

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Function Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-type-annotations
// • Optional Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters
// • Default Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#default-parameters

export { }
