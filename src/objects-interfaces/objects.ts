// 📘 Objects in TypeScript
// 📦 An object is a group of related data stored together in key–value pairs.
// Think of it like a "box" that holds multiple labeled values.

// Example: a person
// name → "Alice"
// age → 28
// isAdmin → false

// -------------------------
// 👤 Defining an object
// -------------------------

console.log("\n-------------------------")
console.log("👤 Defining an object")
console.log("-------------------------\n")

const myUser = {
    name: "Alice",
    age: 28,
    isAdmin: false
}

console.log("User object:", myUser)

// -------------------------
// 🎯 Accessing properties
// -------------------------

console.log("\n-------------------------")
console.log("🎯 Accessing properties")
console.log("-------------------------\n")

console.log("Name:", myUser.name) // "Alice"
console.log("Age:", myUser.age) // 28
console.log("Is admin?", myUser.isAdmin) // false

// -------------------------
// ✏️ Changing values
// -------------------------

console.log("\n-------------------------")
console.log("✏️ Changing values")
console.log("-------------------------\n")

myUser.age = 29
myUser.isAdmin = true

console.log("Updated user:", myUser)

// -------------------------
// 🚨 Common mistake: using a wrong key
// -------------------------

// console.log(user.lastname) // ❌ This will be `undefined`, not an error
// TypeScript will help you avoid such mistakes when types are defined (we'll cover this soon)

// -------------------------
// 📘 Accessing Object Properties in TypeScript
// -------------------------
// 🧱 Objects Recap
// -------------------------
// An object is a collection of key–value pairs.
// You can store multiple related values under one variable.

console.log("\n-------------------------")
console.log("🧱 Object Recap")
console.log("-------------------------\n")

const user = {
    name: "Alice",
    age: 28,
    isAdmin: true
}

console.log("User object:", user)

// -------------------------
// 🔹 Dot Notation
// -------------------------
// The most common way to access a property.

console.log("\n-------------------------")
console.log("🔹 Dot Notation")
console.log("-------------------------\n")

console.log("User name:", user.name) // "Alice"
console.log("User age:", user.age) // 28
console.log("Is admin:", user.isAdmin) // true

// -------------------------
// 🔸 Bracket Notation
// -------------------------
// Useful when the property name is dynamic or not a valid identifier.

console.log("\n-------------------------")
console.log("🔸 Bracket Notation")
console.log("-------------------------\n")

console.log("User name:", user["name"])
console.log("User age:", user["age"])

// You can use variables as keys:
const key = "isAdmin"
console.log("Admin flag (via variable):", user[key]) // true

// 💡 TIP!
// Use bracket notation when the property name is not a valid identifier 
// (e.g., contains spaces or special characters).
// Example:
const userWithSpecialKey = {
    "user name": "Bob",
    "user-age": 30
}

console.log("User with special key:", userWithSpecialKey["user name"]) // "Bob"

// -------------------------
// ⚠️ Accessing Non-Existing Properties
// -------------------------
// TypeScript allows it but returns `undefined` at runtime unless types are defined.

console.log("\n-------------------------")
console.log("⚠️ Accessing Non-Existing Properties")
console.log("-------------------------\n")

const nextUser = {
    name: "Alice",
    age: 28,
    isAdmin: true
}

console.log("User.lastname:", nextUser["lastname"]) // undefined
// This won't throw an error, but will return `undefined`

// What if we use .dot notation?
console.log(nextUser.lastname); // ❌ This will show an error if `lastname` is not defined in the object
// Property 'lastname' does not exist on type '{ name: string; age: number; isAdmin: boolean; }'.ts(2339)


// -------------------------
// ❌ Accessing Unknown Properties
// -------------------------
// If you try to access a property of non existing object, it will throw an error.
console.log("\n-------------------------")
console.log("❌ Accessing Unknown Properties")
console.log("-------------------------\n")

const unknownUser: any = {
    name: "Charlie"
}

console.log("Unknown user name:", unknownUser["address"]) // undefined
// Uncommenting the following line will throw an error:
// console.log("Unknown user name:", unknownUser["address"]["city"]) // ❌ TypeError: Cannot read properties of undefined (reading 'city')

// 🧠 Why does this happen?
// Because `unknownUser["address"]` is `undefined`
// and you cannot access properties of `undefined`!
// Because `undefined` is not an object!

// -------------------------
// 🧠 Summary
// -------------------------
// - Use dot notation when you know the exact property name.
// - Use bracket notation for dynamic or invalid identifiers.
// - Accessing unknown properties returns `undefined`.
// - Types will help catch such mistakes.

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Object Property Access: https://www.typescriptlang.org/docs/handbook/2/objects.html#property-access-expressions
// • Optional Chaining: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
// • Nullish Coalescing: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
export { }
