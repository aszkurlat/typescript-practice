// -------------------------------
// 🔷 Advanced Type Guards & Narrowing
// -------------------------------

console.log("\n=== TYPE GUARDS EXAMPLES ===");

interface User {
    type: "user";
    id: number;
    name: string;
}

interface Admin {
    type: "admin";
    id: number;
    permissions: string[];
}

type Person = User | Admin;


// 1. Custom type guard
function isAdmin(person: Person): person is Admin {
    return person.type === "admin";
}

function printPersonInfo(person: Person) {
    if (isAdmin(person)) {
        console.log("Admin permissions:", person.permissions.join(", "));
    } else {
        console.log("User:", person.name);
    }
}

printPersonInfo({ type: "admin", id: 1, permissions: ["edit", "delete"] });


// 2. Narrowing by `in`
function getId(obj: any): number | null {
    if ("id" in obj) return obj.id;
    return null;
}

console.log("ID:", getId({ id: 99 }));


// 3. Discriminated unions + exhaustive check
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    size: number;
}

type Shape = Circle | Square;

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size ** 2;
        default:
            // exhaustive check
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}

console.log("Circle area:", area({ kind: "circle", radius: 5 }));
