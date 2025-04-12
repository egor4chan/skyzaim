// Получаем элементы
const loanForm = document.getElementById("loan-form");
const amountInput = document.getElementById("amount");
const durationInput = document.getElementById("duration");
const result = document.getElementById("result");
const totalAmount = document.getElementById("totalAmount");
const amountValue = document.getElementById("amountValue");
const durationValue = document.getElementById("durationValue");

// Обновляем значения при изменении ползунков
amountInput.addEventListener("input", () => {
  amountValue.textContent = amountInput.value;
});

durationInput.addEventListener("input", () => {
  durationValue.textContent = durationInput.value;
});

// Функция расчёта займа
function calculateLoan(e) {
  e.preventDefault();

  const amount = parseFloat(amountInput.value);
  const duration = parseInt(durationInput.value);

  if (isNaN(amount) || isNaN(duration) || amount <= 0 || duration <= 0) {
    alert("Пожалуйста, введите корректные данные.");
    return;
  }

  // Простая формула для расчета общей суммы (с учётом процентов)
  const interestRate = 0.1; // Например, 10% за весь срок
  const totalRepayment = amount + (amount * interestRate);

  totalAmount.textContent = totalRepayment.toFixed(2);
}

// Добавляем слушатель на форму
loanForm.addEventListener("submit", calculateLoan);
