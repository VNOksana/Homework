            function guessNumber() {

            const randomNumber = Math.floor(Math.random() * 100) + 1;
            
               while (true) {
            
                const userNumber = Number(prompt('Попробуй угадать число от 1 до 100'));
            
                if (userNumber === 0) {

                   alert('Игра отменена');

                    return;
                }
            
                if (userNumber === randomNumber) {
            
                    alert(`Вы угадали. Спасибо за игру!`);
                    alert(`Загаданое число: ${randomNumber}`)
            
                    break;
            
                }
            
                else if (userNumber < randomNumber) {
            
                    alert('Ваше число меньше чем загадано. Попробуйте ещё');
            
               } else {
            
                alert('Ваше число больше чем загадано. Попробуйте ещё');
            
                }
            
              }
            
            } 