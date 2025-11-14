console.log("Hello, TypeScript!");

class Person {
    private password: string;
    public readonly name: string;
    public age: number;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    checkPassword(input: string): boolean {
        return this.password === input;
    }
}

const anna = new Person("Anna", 30, "secret");

console.log("Is Alice password correct?", anna.checkPassword("secret"));
