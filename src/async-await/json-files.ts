import { promises as fs } from "fs";

export async function jsonFileExample(): Promise<void> {
    try {
        // Create a JSON object
        const userData = {
            name: "Alice",
            age: 30,
            email: "alice@example.com",
            hobbies: ["reading", "coding", "hiking"]
        }

        // Write JSON to file
        await fs.writeFile("user.json", JSON.stringify(userData, null, 2))
        console.log("✅ JSON file created")

        // Read and parse JSON
        const jsonContent = await fs.readFile("user.json", "utf8")
        const parsedData = JSON.parse(jsonContent)
        console.log("📖 Parsed JSON:", parsedData.name)

        // Update JSON data
        parsedData.age = 31
        parsedData.hobbies.push("swimming")

        // Write updated JSON
        await fs.writeFile("user.json", JSON.stringify(parsedData, null, 2))
        console.log("✅ JSON file updated")

        // Clean up
        await fs.unlink("user.json")
        console.log("🧹 JSON file cleaned up")
    } catch (error) {
        console.error("❌ JSON Error:", error)
    }
}

// Lets test the JSON file operations

await jsonFileExample()

// On console:
// ✅ JSON file created
// 📖 Parsed JSON: Alice
// ✅ JSON file updated
// 🧹 JSON file cleaned up
