"use strict";
//"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// let intput: any = '5';
// console.log(`The input lenght is: ${intput.length}`);
// const greet = (name) => {
//     return `Hello, ${name}!`;
// };
// console.log(greet("Agnieszka"));
// 📘 Lesson: Variables, Types, and Type Inference
// In this lesson, you'll learn:
// - how to declare variables using `let` and `const`
// - how to work with basic types: number, string, and boolean
// - how TypeScript automatically understands (infers) the type of a variable
Object.defineProperty(exports, "__esModule", { value: true });
// -------------------------
// 🔡 Declaring variables
// -------------------------
// In TypeScript, you can declare variables using `let` or `const`.
// - `let` is used for variables that can change later
// - `const` is used for variables that should not change after being set
// - PS. There is also `var`, but it's not recommended for modern TypeScript code.
// This helps prevent accidental changes to important values.
console.log("\n-------------------------");
console.log("🔡 Declaring variables");
console.log("-------------------------\n");
let name = "Alice"; // name can change later
const birthYear = 1990; // birthYear is fixed
console.log("Name:", name);
console.log("Birth year:", birthYear);
name = "Alicja"; // ✅ allowed with let
// birthYear = 1991 // ❌ Error: const can't be changed
// -------------------------
// 🔢 Basic types: number, string, boolean
// -------------------------
console.log("\n-------------------------");
console.log("🔢 Basic types");
console.log("-------------------------\n");
let age = 33;
let language = "TypeScript";
let isTester = true;
console.log("Age:", age);
console.log("Language:", language);
console.log("Is tester:", isTester);
// -------------------------
// 🧠 Type Inference
// -------------------------
// TypeScript can figure out the type by looking at the value
console.log("\n-------------------------");
console.log("🧠 Type Inference");
console.log("-------------------------\n");
const city = "Warsaw";
const score = 100;
const isReady = false;
// You don't need to write `: string`, `: number`, or `: boolean` every time
console.log("City:", city);
console.log("Score:", score);
console.log("Is ready:", isReady);
// ✅ Good habit: use type inference when the type is clear
// ✅ Use explicit types when needed for clarity or safety
console.log("\n-------------------------");
console.log("🔄 Redeclaring types");
console.log("-------------------------\n");
let userId;
// some code
userId = "abc";
console.log("User ID:", userId);
// userId = 123 // ❌ Error: can't assign number to string type
// but for constants, you must declare the type when you create it
// const userEmail: string // ❌ Error: const must be initialized
console.log("\n-------------------------");
console.log("String types");
console.log("-------------------------\n");
// String is a sequence of characters
const greeting = "Hello, TypeScript!";
console.log("Greeting:", greeting);
// You can use single quotes, double quotes, or backticks
const doubleQuote = "Double quotes are common";
const singleQuote = 'Single quotes are fine too. They allow to use "double quotes" inside';
const backtick = `Backticks allow for multi-line strings and interpolation`;
console.log("Single quote:", singleQuote);
console.log("Double quote:", doubleQuote);
console.log("Backtick:", backtick);
// Why there are different quotes?
// - Single and double quotes are mostly interchangeable
// - You can also use single quotes inside double quotes and vice versa
// - Backticks allow for multi-line strings and string interpolation
const multiLine = `This is a multi-line string! 
You can write text on multiple lines without using \n.
It also allows for string interpolation: ${greeting}`;
console.log("Multi-line string:", multiLine);
//# sourceMappingURL=index.js.map