// Mouseover
const mouseoverBtn = document.getElementById('mouseover-btn');
mouseoverBtn.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'green';
});
mouseoverBtn.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'red'; // Reset
});

// Mouseout
const mouseoutBtn = document.getElementById('mouseout-btn');
mouseoutBtn.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'blue';
});
mouseoutBtn.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'red'; // Reset
});

// Click
const onclickBtn = document.getElementById('onclick-btn');
onclickBtn.addEventListener('click', function () {
    this.style.backgroundColor = 'orange';
});

// Double Click
const doubleClickBtn = document.getElementById('doubleclick-btn');
doubleClickBtn.addEventListener('dblclick', function () {
    this.style.backgroundColor = 'purple';
});

// Focus
const focusInput = document.getElementById('focus-input');
focusInput.addEventListener('focus', function () {
    this.style.backgroundColor = 'yellow';
});

// Blur
const blurInput = document.getElementById('blur-input');
blurInput.addEventListener('blur', function () {
    this.value = this.value.toUpperCase();
});
