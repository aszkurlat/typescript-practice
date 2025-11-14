console.log("=== Advanced TypeScript Example ===");

// ENUM – predefined values
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

// INTERFACE – contract for classes/objects
interface PersonProps {
    readonly name: string;
    age: number;
    role: Role;
}

// CLASS using interface
class Person implements PersonProps {
    public readonly name: string;
    public age: number;
    public role: Role;
    private password: string;

    constructor({ name, age, role }: PersonProps, password: string) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.password = password;
    }

    // GETTER
    get info(): string {
        return `${this.name} (${this.age}) – role: ${this.role}`;
    }

    // SETTER with validation
    set updateAge(value: number) {
        if (value < 0 || value > 120) {
            throw new Error("Invalid age");
        }
        this.age = value;
    }

    // STATIC METHOD – utility function
    static isAdult(age: number): boolean {
        return age >= 18;
    }

    checkPassword(input: string): boolean {
        return this.password === input;
    }
}

// UNION TYPE + optional parameter
function printValue(value: string | number, prefix?: string) {
    // TYPE NARROWING
    if (typeof value === "number") {
        console.log(prefix ?? "Number:", value.toFixed(2));
    } else {
        console.log(prefix ?? "String:", value.toUpperCase());
    }
}

// Example usage
const john = new Person({ name: "John", age: 25, role: Role.User }, "pass123");

console.log(john.info);
console.log("Is adult:", Person.isAdult(john.age));

john.updateAge = 30;

printValue("hello");
printValue(123.456, "Value:");
