const amountInput = document.getElementById("amount");
const amountValue = document.getElementById("amount-val");

const dateInput = document.getElementById("date");
const dateValue = document.getElementById("date-val");

const menuButton = document.getElementById("menu");
const menuBlock = document.getElementById("menublock");

const exValue = document.getElementById('amount-ex');
const totalValue = document.getElementById('total-ex');


var menuStatus = 0

amountInput.addEventListener("input", () => {
    amountValue.textContent = Number(amountInput.value).toLocaleString('ru-RU') + '₽';
    exValue.textContent = Number(amountInput.value).toLocaleString('ru-RU') + '₽';
    totalValue.textContent = Number(amountInput.value).toLocaleString('ru-RU') + '₽';
});

dateInput.addEventListener("input", () => {
    dateValue.textContent = dateInput.value + ' дней';
    if (dateInput.value == 21) {
        dateValue.textContent = dateInput.value + ' день';
    }
});

function openMenu() {
    if (menuStatus == 0) {
        menuBlock.style.display = 'flex'
        menuStatus = 1
    }
    else if (menuStatus == 1) {
        menuBlock.style.display = 'none'
        menuStatus = 0
    }
}


const slider = document.getElementById("amount");

slider.addEventListener("input", function() {
  const value = this.value;
  const min = this.min;
  const max = this.max;
  const percentage = ((value - min) / (max - min)) * 100;

  this.style.background = `linear-gradient(to right, #3f90fb 0%, #3f90fb ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
});

const slider2 = document.getElementById("date");

slider2.addEventListener("input", function() {
  const value = this.value;
  const min = this.min;
  const max = this.max;
  const percentage = ((value - min) / (max - min)) * 100;

  this.style.background = `linear-gradient(to right, #3f90fb 0%, #3f90fb ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
});