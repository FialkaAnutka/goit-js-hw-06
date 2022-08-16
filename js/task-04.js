
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

  

let counterValue = 0

const counterDisplay = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const btnMinus = () => {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
}
decrementBtn.addEventListener('click', btnMinus);
const btnPlus = () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
}
incrementBtn.addEventListener('click', btnPlus) 