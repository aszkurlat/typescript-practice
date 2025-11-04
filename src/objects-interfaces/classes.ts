// 📘 Classes in TypeScript
// A class is a blueprint for creating objects with shared properties and methods.
// It defines how the object will look and behave.

console.log("\n-------------------------")
console.log("🧱 Basic Class")
console.log("-------------------------\n")

// Imagine a class that represents a person
// It has properties like name and age, and methods to greet.
// Classes are defined using the `class` keyword.

class Person {
    name: string
    age: number

    // Constructor is a special method!
    // Constructor runs when we create an instance of the class
    // It initializes the properties of the class.
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// Class is a blueprint! Just a definition.
// Now we can create instances (objects) of the Person class.
// Imagine in real life, you can create many people with different names and ages.

const alice = new Person("Alice", 28)
alice.greet() // Hello, my name is Alice and I am 28 years old.

const bob = new Person("Bob", 32)
bob.greet() // Hello, my name is Bob and I am 32 years old.

console.log("\n-------------------------")
console.log("🧱 Class and Properties")
console.log("-------------------------\n")

// Classes can have properties (data) and methods (functions).

const john = new Person("John", 25)
console.log("Name:", john.name) // John
console.log("Age:", john.age) // 25
console.log("Age:", john["age"]) // 25

// -------------------------
// 🧰 Why Use Classes?
// -------------------------
// - Organize related data (properties) and behavior (methods) together
// - Reuse code via inheritance
// - Encapsulate logic for cleaner and more maintainable code

// -------------------------
// ⚙️ Adding Methods
// -------------------------
// Methods define actions the class instances can perform.

console.log("\n-------------------------")
console.log("⚙️ Adding Methods")
console.log("-------------------------\n")

class Calculator {
    // Methods can perform operations
    add(a: number, b: number): number {
        return a + b
    }

    subtract(a: number, b: number): number {
        return a - b
    }

    // wait, where is constructor? We don't need one here!
    // This class doesn't need to initialize any properties,
    // so we can skip the constructor!
}

const calc = new Calculator()
console.log("Sum:", calc.add(5, 3)) // 8
console.log("Difference:", calc.subtract(5, 3)) // 2

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - example 1")
console.log("-------------------------\n")

// only properties that are public can be accessed outside the class!

class Person2 {
    // Public property can be accessed from anywhere
    public name: string
    // when no access modifier is specified, it defaults to public
    // so this is also a public property
    nameWithoutModifier: string

    // Private property can only be accessed within the class
    private age: number
    // Protected property can be accessed in subclasses
    protected address: string

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.nameWithoutModifier = name
        this.age = age
        this.address = address
    }
}

const person = new Person2("Alice", 30, "123 Main St")
console.log(person.name) // Alice
console.log(person.nameWithoutModifier) // Alice
// person.age // Error: Property 'age' is private and only accessible within class 'Person'.
// person.address // Error: Property 'address' is protected and only accessible within class 'Person

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - example 2")
console.log("-------------------------\n")

class User {
    // Public property can be accessed from anywhere
    private username: string

    // Private property can only be accessed within the class
    private password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    // Public method to get the username
    public getUsername(): string {
        return this.username
    }

    public changeUsername(newUsername: string, password: string): void {
        if (this.checkPassword(password)) {
            this.username = newUsername
            console.log("Username updated successfully.")
        } else {
            console.log("Password is incorrect. Cannot change username.")
        }
    }

    // Public method to set a new password
    public setPassword(oldPassword: string, newPassword: string): void {
        if (this.checkPassword(oldPassword)) {
            this.password = newPassword
            console.log("Password updated successfully.")
        } else {
            console.log("Old password is incorrect.")
        }
    }

    // Private method to check password (not accessible outside)
    private checkPassword(input: string): boolean {
        return this.password === input
    }
}

const user = new User("john_doe", "securePassword123")
console.log(user.getUsername()) // john_doe
user.setPassword("securePassword123", "newSecurePassword456") // Password updated successfully.
// user.checkPassword("securePassword123") // Error: Property 'checkPassword' is private

// lets provide incorrect old password
user.setPassword("wrongPassword", "anotherSecurePassword") // Old password is incorrect!

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - more complex example")
console.log("-------------------------\n")

class BankAccount {
    // Public properties can be accessed from anywhere
    public accountNumber: string
    // property without an access modifier is public by default
    owner: string

    // Private properties can only be accessed within the class
    private balance: number

    constructor(initialBalance: number) {
        // `this` refers to the current instance of the class
        this.accountNumber = "123456789"
        this.owner = "John Doe"
        // `private` properties can only be set within the class
        this.balance = initialBalance
    }

    // methods can also have access modifiers
    public getBalance(): number {
        // `private` properties can be accessed within the class
        return this.balance
    }

    // methods without an access modifier are public by default
    deposit(amount: number) {
        this.balance += amount
        console.log(`Deposited ${amount}. New balance: ${this.balance}`)
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient funds!")
        } else {
            this.balance -= amount
            console.log(`Withdrew ${amount}. Remaining balance: ${this.balance}`)
        }
    }
}

const account = new BankAccount(100)
account.deposit(50)  // Deposited 50. New balance: 150
account.withdraw(200) // Insufficient funds!

// we can access public properties and methods
console.log(`Account Number: ${account.accountNumber}`) // Account Number: 123456
console.log(`Owner: ${account.owner}`) // Owner: John Doe
console.log(`Balance: ${account.getBalance()}`) // Balance: 150


export { }
