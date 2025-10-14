function turnOverText() {
    let regexp = /^[a-zA-Zа-яА-Я]*$/;
    let userEnter;

    do {
        userEnter = prompt("Введите ваше слово!");
        if (userEnter === null) {
            alert("Пока");
            break;
        }
        if (regexp.test(userEnter)) {
            alert(userEnter.split("").reverse().join(""));
        } else {
            alert("Вы ввели не слово введите, пожалуйста, слово");
        }
    } while (!regexp.test(userEnter) || userEnter === "");

}
