
import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  formEmail: document.querySelector('.feedback-form input'),
  formMsg: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateInput();

function onFormSubmit(e) {
  e.preventDefault();

  const { elements: { email, message } } = e.currentTarget;

  if(email.value === '' || message.value === '') {
    return alert("Помилка! Всі поля повинні бути заповнені.");
  };

  formData.email = email.value;
  formData.message = message.value;

  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput() {
    formData.email = refs.formEmail.value;
    formData.message = refs.formMsg.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
  const savedObj = localStorage.getItem(STORAGE_KEY);

  try {
    const parsedSavedObj = JSON.parse(savedObj);

    if (savedObj) {
      refs.formEmail.value = parsedSavedObj.email;
      refs.formMsg.value = parsedSavedObj.message;

      if (parsedSavedObj.email === '') {
        refs.formEmail.value = '';
      }
      if (parsedSavedObj.message === '') {
        refs.formMsg.value = '';
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}