// -------------------------
// 🔶 Built-In Utility Types
// -------------------------

console.log("\n=== UTILITY TYPES EXAMPLES ===");

interface User {
    id: number;
    name: string;
    email?: string;
    role: "admin" | "user";
}


// 1. Partial<T> – wszystkie pola opcjonalne
const updateUser = (id: number, data: Partial<User>) => {
    console.log(`Updating ${id} with`, data);
};

updateUser(1, { name: "Updated Name" });


// 2. Required<T> – wszystkie pola obowiązkowe
type StrictUser = Required<User>;

const strictUser: StrictUser = {
    id: 2,
    name: "John",
    email: "john@wp.pl",
    role: "user",
};


// 3. Readonly<T> – pola nie do zmiany
const readonlyUser: Readonly<User> = {
    id: 3,
    name: "Ana",
    email: "ana@example.com",
    role: "admin",
};

// readonlyUser.name = "X"; ❌ error


// 4. Pick<T> – wybieramy pola
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = { id: 10, name: "Marek" };


// 5. Omit<T> – usuwamy pola
type UserWithoutEmail = Omit<User, "email">;

const userNoEmail: UserWithoutEmail = {
    id: 4,
    name: "Ewa",
    role: "user",
};


// 6. Record<K, T> – mapa typów
type FeatureFlags = Record<
    "darkMode" | "betaUser" | "newUI",
    boolean
>;

const flags: FeatureFlags = {
    darkMode: true,
    betaUser: false,
    newUI: true,
};

console.log("Feature flags:", flags);


// 7. ReturnType<T> – wyciąganie typu zwracanego
function loadUser() {
    return { id: 5, name: "Ola", admin: false };
}

type LoadedUser = ReturnType<typeof loadUser>;
const lu: LoadedUser = loadUser();


// 8. Real-life case — API response mapping to test data
interface Project {
    id: string;
    title: string;
    createdAt: string;
}

type ProjectUpdatePayload = Partial<Omit<Project, "id">>;

const payload: ProjectUpdatePayload = {
    title: "Updated Project Name",
};

console.log("Payload for PATCH:", payload);
