const btnStart = document.querySelector('.game-box__start').addEventListener('click', hangmanGame); // запускаю кнопкою функцію з грою
// const inpStartGame = document.querySelector('.game-box__entry').addEventListener('keyup', hangmanGame);

function hangmanGame() {
  const out = document.querySelector('.game-box__result'); // парагра куди вивожу вгадане слово
  const wordArr = ['cat', 'dog', 'tv', 'smatphone', 'work', 'money', 'javascript'];// массив з словами
  const random = wordArr[Math.floor(Math.random() * wordArr.length)];//  перемішу масив і записую рандомне слово в константу
  const closeWord = []; // масив в котрий будуть записуватися слова рандомні і замість букв пдставляться символи
  let wordLength = random.length; // змінна в котру записуються довжини рандомних слів
  let chance = 3; // лічильник спроб


  for (let i = 0; i < random.length; i++) { //  цикл котрий перебирає рандомне слово 
    closeWord[i] = '*'; // в новий масив запию символ. Кількість символів = довжині слова
  }

  console.log(closeWord); 

  while (wordLength > 0) {  // Ігровий цикл, котрий проходиться по довжині рандомного слова
    alert(closeWord.join(' ')); // вивожу закриту строку. Початок гри
    const guess = prompt('Please send letter or enter close'); // сюди вписую слово
    if (guess === null) {  // відміна гри
      alert('Thank you and come back !!!');
      break; // кінець циклу гри. Вихід з гри
    }
    if (guess.length !== 1) { // якщо списане слово більше одного символа
      alert('Please send one letter');
      break; // вихід з  гри
    } else { //
      for (k = 0; k < random.length; k++) { // цикл перебирає рандомне слово по довжині
        if (random[k] === guess) { // якщо літера рандомного слова така як і prompt
          closeWord[k] = guess; // то замість зірочок в закритому масиві піставляю цю літеру
          wordLength--; // якщо літера співпала з індексом загаданого слова, то від дожини віднімаю 1 символ. Коли всі слова вгадані, то цикл завершується
        }
      }
    }
    if (!random.includes(guess)) {// Якщо в слові немає такої літери як ввів гравець
      chance--; // віднімажться шанс
      alert(`No such letter in the word!! You have chanse ${chance} left `);//
    }
    if (!closeWord.includes('*')) {// Якщо в закритому масиві немає більше символів зірки, то значить, що слово відгадане і гра виграна. Цикл завершився
      out.textContent = 'You win. The word is: ' + ` ${closeWord.join(' ').toUpperCase()}`;// виводжу вгадане слово в параграф в великих буквах
      break;//
    }
    if (chance === 0) {// немає шансів
      alert('You los!!');
      break;// якщо не залишилося шансів, то гра програна і цикл зупиняється
    }
  }
}