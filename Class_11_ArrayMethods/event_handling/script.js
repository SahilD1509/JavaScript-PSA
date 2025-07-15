document.addEventListener('DOMContentLoaded', () => {

    // OnMouseover Event
    const mouseoverBtn = document.getElementById('mouseover-btn');
    mouseoverBtn.addEventListener('mouseover', () => {
        mouseoverBtn.style.backgroundColor = '#3498db'; // Change color on mouse over
    });

    // OnMouseout Event
    const mouseoutBtn = document.getElementById('mouseout-btn');
    mouseoutBtn.addEventListener('mouseout', () => {
        mouseoutBtn.style.backgroundColor = '#e74c3c'; // Change back on mouse out
    });

    // Onclick Event
    const onclickBtn = document.getElementById('onclick-btn');
    onclickBtn.addEventListener('click', () => {
        onclickBtn.style.backgroundColor = '#2ecc71'; // Change color on click
    });

    // Ondblclick Event
    const ondblclickBtn = document.getElementById('ondblclick-btn');
    ondblclickBtn.addEventListener('dblclick', () => {
        ondblclickBtn.style.backgroundColor = '#9b59b6'; // Change color on double click
    });

    // onfocus Event
    const onfocusInput = document.getElementById('onfocus-input');
    onfocusInput.addEventListener('focus', () => {
        onfocusInput.style.backgroundColor = '#f1c40f'; // Change background color on focus
    });

    // onblur Event
    const onblurInput = document.getElementById('onblur-input');
    onblurInput.addEventListener('blur', () => {
        onblurInput.value = onblurInput.value.toUpperCase(); // Change text to uppercase on blur
    });
});