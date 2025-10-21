function simpleArithmetic() {
    function generateRandomArrey() {
        const operation = ["+", "-", "*", "/"];

        function generateRandomExample() {
            const firstNumb = Math.floor(Math.random() * 10) + 1;
            const secondNumb = Math.floor(Math.random() * 10) + 1;
            const randomAction = Math.floor(Math.random() * operation.length);
            const randomOperation = operation[randomAction];

            if (randomOperation === "/") {
                const div = firstNumb * secondNumb;
                return `${div} ${randomOperation} ${secondNumb}`;
            }
            return `${firstNumb} ${randomOperation} ${secondNumb}`;
        }
        function generateExample(count) {
            const example = [];
            for (let i = 0; i < count; i++) {
                example.push(generateRandomExample());
            }
            return example;
        }
        return generateExample(4);
    }

    const showExample = generateRandomArrey();
    console.log(showExample);

    for (const exap of showExample) {
        const userInput = prompt(`Реши пример ${exap}`);
        const userAnswer = Number(userInput);
        const rightAnswer = eval(exap);

        if (userInput === null) {
            alert('Пока, приходи ещё.');
            break;
        }
        if (userAnswer !== rightAnswer) {
            alert('Посчитал неправильно. Правильный ответ ' + rightAnswer)
        }
        if (!isNaN(userAnswer) && userAnswer === rightAnswer) {
            alert("верный ответ, молодец!")
        }
    }
}

