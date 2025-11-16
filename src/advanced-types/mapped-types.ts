// -------------------------------
// 🔶 Advanced Mapped Types
// -------------------------------

console.log("\n=== MAPPED TYPES EXAMPLES ===");

// 1. Basic mapped type
type Optional<T> = {
    [K in keyof T]?: T[K];
};

interface Product {
    id: string;
    title: string;
    price: number;
}

const updateProduct: Optional<Product> = {
    title: "New title"
};


// 2. Readonly mapped type
type Immutable<T> = {
    readonly [K in keyof T]: T[K];
};

const frozenProduct: Immutable<Product> = {
    id: "abc",
    title: "Phone",
    price: 1999,
};

// frozenProduct.price = 2000; ❌ error


// 3. Transform keys (append suffix, uppercase keys, etc.)
type PrefixKeys<T> = {
    [K in keyof T as `project_${string & K}`]: T[K];
};

type ProjectDetails = {
    name: string;
    createdAt: string;
};

type PrefixedProject = PrefixKeys<ProjectDetails>;

const project: PrefixedProject = {
    project_name: "ABC App",
    project_createdAt: "2025-11-15",
};


// 4. Real QA Automation use-case: API response → TestModel
type ApiResponse<T> = {
    data: T;
    error?: string;
};

type TestModel<T> = {
    [K in keyof T]: T[K];
};

// Example data shape
interface UserApi {
    id: number;
    username: string;
    roles: string[];
}

const response: ApiResponse<UserApi> = {
    data: {
        id: 1,
        username: "megaUser",
        roles: ["admin", "editor"]
    },
};

const mappedToTest: TestModel<UserApi> = response.data;

console.log("Mapped Model:", mappedToTest);
