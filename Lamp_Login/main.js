const lamp = document.getElementById('lamp');
const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('loginForm');

// روشن / خاموش کردن چراغ و نمایش فرم
lamp.addEventListener('click', () => {
    lamp.classList.toggle('on');
    loginForm.classList.toggle('active');
    overlay.classList.toggle('active');
});

// بستن چراغ و فرم با کلیک روی پس‌زمینه
overlay.addEventListener('click', () => {
    lamp.classList.remove('on');
    loginForm.classList.remove('active');
    overlay.classList.remove('active');
});