// ❓DESCRIPTION 
// Завершите метод, который принимает булево значение и 
// возвращает строку "Да" для true или строку "Нет" для false.

//💥TEST
    // assert.strictEqual(boolToWord(true), 'Yes')
    // assert.strictEqual(boolToWord(false), 'No')

// ✅SOLUTION
function boolToWord( bool ){
    return bool ? "Yes" : "No";
}
console.log(boolToWord(false));


