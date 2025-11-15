// -------------------------
// 🔷 Advanced Generics Examples
// -------------------------

console.log("\n=== GENERICS EXAMPLES ===");

// 1. Generic function with constraints
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: "Alice", isAdmin: false };
console.log("Property:", getProperty(user, "name")); // ok


// 2. Generic interface
interface ApiResponse<T> {
    data: T;
    status: number;
    error?: string;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 10, name: "Bob" },
    status: 200,
};


// 3. Generic class
class DataStore<T = string> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return [...this.items];
    }
}

const store = new DataStore<number>();
store.add(1);
store.add(2);
console.log("DataStore:", store.getAll());


// 4. Generic utility with multiple types
function mergeObjects<A extends object, B extends object>(a: A, b: B): A & B {
    return { ...a, ...b };
}

const merged = mergeObjects({ name: "Aga" }, { age: 39, city: "Poznań" });
console.log("Merged object:", merged);


// 5. Generic async function (useful in automation)
async function fetchData<T>(value: T): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(value), 300));
}

(async () => {
    const data = await fetchData({ id: 1, name: "Test" });
    console.log("Fetched:", data);
})();
