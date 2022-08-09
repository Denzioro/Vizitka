let count = 0;
const str =
  'Привет, меня зовут Денис,\nЯ являюсь Front-end разработчиком\nУвлечения:\n-Инновационные технологии\n-Спорт\n-Стратегические игры\n-Мотоциклы\n-Всегда интересно было что-то создавать своими руками...\n-Мир разработки прекрасен ,каждая строка кода заставляет тебя смотреть на вещи иначе\n-И позволяет радоваться прогрессу';
function myFunc() {
  document.getElementById('myInput').value += str[count];
  count++;

  if (count >= str.length) {
    clearInterval(x);
  }
}
const x = setInterval(myFunc, 100);
