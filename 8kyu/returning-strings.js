// ❓DESCRIPTION
// Создайте функцию, которая принимает параметр, представляющий собой имя, 
// и возвращает сообщение: "Hello, <имя> how are you doing today?".

// [Убедитесь, что вы набрали именно то, что я написал, 
// иначе программа может не выполниться должным образом].

// 💥TESTS
// assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
// assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

// ✅SOLUTION
function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

console.log(greet("Ryan"));