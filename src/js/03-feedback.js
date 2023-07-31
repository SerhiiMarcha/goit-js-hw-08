import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localData) {
  form.email.value = localData.email;
  form.message.value = localData.message;
}

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput() {
  const data = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();
  const checkData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!checkData) return;
  console.log(checkData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}