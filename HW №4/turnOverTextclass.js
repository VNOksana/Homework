function turnOverText() {
    // Регулярное выражение для проверки букв  
    let regexp = /^[a-zA-Za-яА-Я]*$/;
    let userEnter;

    do {
        userEnter = prompt("Введите ваше слово!");

        if (userEnter === null) {
            alert("До свидания!");
            break;
        }

        if (regexp.test(userEnter)) {
            // Переворачиваем слово  
            alert("Перевернутое слово: " + userEnter.split("").reverse().join(""));
        } else {
            alert("Ошибка! Введите только буквы.");
        }
    } while (true);
}
