/* Получение доступа к кнопкам */
let keys = document.querySelectorAll('#calculator span');
let operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;

/* Добавление события onclick при нажатии на кнопки и выполнении операций */
for(let i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
/* Получение доступа к строке вывода, значениям в кнопках и вывод их значений на экран */
		let input = document.querySelector('.screen');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;
		
/* Вывод на экран значений существующих кнопок после нажатия и результатов операций */
/* Очистка строки вывода после нажатия кнопки сброса C */
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}

/* Вычисление операций и вывод результата на экран после нажатия на кнопку равно */
		else if(btnVal == '=') {
			let equation = inputVal;
			let lastChar = equation[equation.length - 1];

/* Замена символов x и ÷ на * и /, чтобы производить умножение и деление */
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
		
/* Проверка последнего символа уравнения: если это оператор или десятичная точка, они удаляются */
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
			  equation = equation.replace(/.$/, '');
      }

/* Предотвращение влияния особенностей чисел с плавающей точкой */
			if(equation) {
			  input.innerHTML = Number(eval(equation).toFixed(14));
			  decimalAdded = false;
      }
    }
/* Оператор после нажатия становится последним символом выражения, если строка не пустая и рядом нет другого оператора */
		else if(operators.indexOf(btnVal) > -1) {
			lastChar = inputVal[inputVal.length - 1];
			if(inputVal != '' && operators.indexOf(lastChar) == -1) {
			  input.innerHTML += btnVal;
      }

/* Разрешение написать минус, если строка пустая */
			else if(inputVal == '' && btnVal == '-') {
				input.innerHTML += btnVal;
      }
/* Текущмй оператор в строке заменяется на новый */
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
/* Здесь '.' соответствует любому символу, в то время как $ обозначает конец строки, поэтому все(в данном случае это будет оператор) в конце строки будет заменено новым оператором */
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}

		decimalAdded = false;
	}
/* Теперь осталась только десятичная задача. Мы можем легко решить это, используя флаг "decimalAdded", который мы установим после добавления десятичной дроби и предотвратим добавление большего количества десятичных знаков после его установки. Он будет сброшен при нажатии клавиши operator, eval или clear. */
			else if(btnVal == '.') {
				if(!decimalAdded) {
					input.innerHTML += btnVal;
					decimalAdded = true;
				}
			}

			else {
				input.innerHTML += btnVal;
			}

/* Предотвращение переходов по странице после нажатия кнопок*/
		e.preventDefault();
	}

/* Подключение клавиатуры*/
document.onkeydown = function(event) {

	let key_press = String.fromCharCode(event.keyCode);
	let key_code = event.keyCode;
	let input = document.querySelector('.screen');
	let inputVal = input.innerHTML;
  let lastChar = inputVal[inputVal.length - 1];
  let equation = inputVal;
  
/* Замена символов x и ÷ на * и /, чтобы производить умножение и деление */
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

/* Настройка вывода событий keypress на экран */
  
    if(key_press == 1) {
      input.innerHTML += key_press;
  }
    if(key_press == 2) {
      input.innerHTML += key_press; 
  }
    if(key_press == 3) {
      input.innerHTML += key_press; 
  }
    if(key_press == 4) {
      input.innerHTML += key_press; 
  }
    if(key_press == 5) {
      input.innerHTML += key_press; 
  }
    if(key_press == 6) {
      input.innerHTML += key_press; 
  }
    if(key_press == 7) {
      input.innerHTML += key_press; 
  }
    if(key_press == 8 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press == 9) {
      input.innerHTML += key_press; 
  }
    if(key_press == 0) {
      input.innerHTML += key_press;
  }
  
  /* Вывод операторов на экран и предотвращение написания 2 операторов подряд */
  
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector('.screen').innerHTML += '+';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      document.querySelector('.screen').innerHTML += '-';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      document.querySelector('.screen').innerHTML += 'x';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      document.querySelector('.screen').innerHTML += '÷';
  }
    if (inputVal != '' && lastChar != '.' && lastChar != operators[0] && lastChar != operators[1] && lastChar != operators[2] && lastChar != operators[3] && key_code == 190) {
      document.querySelector('.screen').innerHTML += '.';
  }
    if(key_code == 13 || key_code == 187 && event.shiftKey == false) {
      input.innerHTML = Number(eval(equation).toFixed(14));
      decimalAdded = false;
  }
    if(key_code == 8 || key_code == 46) {
			input.innerHTML = '';
			decimalAdded = false;
  }

}
}
