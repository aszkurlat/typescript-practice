// Async Code Without Await
// This shows how we used to handle asynchronous code before `await`

// -------------------------
// ⏳ Simulate loading data using a Promise
// -------------------------

// console.log("\n-------------------------")
// console.log("⏳ Simulate loading data using a Promise")
// console.log("-------------------------\n")

// async function loadData(): Promise<string> {
//     // Simulate loading data with a delay
//     // This function returns a Promise that resolves after 1 second
//     console.log("🚚 Loading data...")
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("🎯 Data loaded")
//             resolve("✅ Data loaded (no await)")
//         }, 100)
//     })
// }

// console.log("1. Starting request...")

// const result = loadData()

// console.log("2. Request sent!")
// console.log("3. Result:", result) // This shows: Promise { <pending> }

// result.then((data) => {
//     console.log("4. Result:", data) // This will print the loaded data once ready
// })

// 📘 Lesson: Async & Await
// This shows how to write clean asynchronous code using `await`

// -------------------------
// ✅ Clean syntax with async/await
// -------------------------

console.log("\n-------------------------")
console.log("✅ Clean syntax with async/await")
console.log("-------------------------\n")

async function loadData(): Promise<string> {
    // Simulate loading data with a delay
    // This function returns a Promise that resolves after 1 second
    console.log("🚚 Loading data...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🎯 Data loaded")
            resolve("✅ Data loaded (no await)")
        }, 100)
    })
}

console.log("1. Starting request...");

let result: string; // 🔹 zmienna globalna

(async () => {
  result = await loadData();
  console.log("2. Request sent!");
  console.log("3. Result:", result);
})();

console.log("2. Request sent!");

console.log("3. Result:", result);

export { }