import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const [inputValue, textareaValue] = form;
const FEEDBACK_FORM_STATE = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
window.addEventListener('load', pageLoad);

function pageLoad() {
  const localStorageData = JSON.parse(
    localStorage.getItem(FEEDBACK_FORM_STATE)
  );
  if (localStorageData) {
    inputValue.value = localStorageData.email;
    textareaValue.value = localStorageData.message;
  }
}

function onInput() {
  const currentData = getDataForm();
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(currentData));
}

function onSubmit(event) {
  event.preventDefault();
  const currentData = getDataForm();
  console.log(currentData);

  localStorage.removeItem(FEEDBACK_FORM_STATE);
  form.reset();
}

function getDataForm() {
  return { email: inputValue.value, message: textareaValue.value };
}
