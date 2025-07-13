// ❓DESCRIPTION 
// В этой игре герой двигается слева направо. Игрок бросает кубик и 
// перемещается на количество мест, указанное на кубике, два раза.

// Создайте функцию для терминала игры, которая принимает 
// текущую позицию героя и бросок (1-6) и возвращает новую позицию.

//💥TEST
    // Test.assertEquals(move(0, 4), 8);
    // Test.assertEquals(move(3, 6), 15);
    // Test.assertEquals(move(2, 5), 12);

// ✅SOLUTION
function move (position, roll) {
    return position + roll * 2;
}

console.log(move(3, 4));

