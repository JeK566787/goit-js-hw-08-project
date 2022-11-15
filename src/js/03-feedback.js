import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
// строка-ключ в локалсор.
const LOCALSTORAGE_KEY = 'feedback-form-state';
// объект для localStorage
let userDate = {};

// функция для записи данных из локалстор. в форму
const fillContactFormElements = () => {
  // получаем в переменную объект из локал сторидж, предварительно распарсив джейсон-строку
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedData) {
    const userDataFromLS = JSON.parse(savedData);
    Object.entries(userDataFromLS).forEach(([name, value]) => {
      // console.log(name);
      // console.log(value);
      formRef.elements[name].value = value;
    });
  }
  // //цыклом проходим по каждому ключу объекта
  // for (const prop in userDataFromLS) {
  //   //   только по собственным свойствам
  //   if (userDataFromLS.hasOwnProperty(prop)) {
  //     // записуем данные с объекта в форму
  //     formRef.elements[prop].value = userDataFromLS[prop];
  //   }
};
if (localStorage.length !== 0) {
  fillContactFormElements();
}

// Запись данных в локалсторэдж при введение в инпут
const onContactFormInput = event => {
  // значения имени и данных записуем в переменные
  const name = event.target.name;
  const value = event.target.value;
  // проверка, чтобы в локалстор. оставалось запол. поле
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    userDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(userDate);
  }
  // имя и данные записуем в объект
  userDate[name] = value;
  //   console.log(userDate);
  // записуем объект с новыми данными в локалстор., превратив его в строку
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDate));
};

// Очищение формы и локалстор. при сабмите
const onContactFormSubmit = event => {
  event.preventDefault();
  const submitedData = new FormData(formRef);
  submitedData.forEach((value, name) => {
    userDate[name] = value;
  });

  if (
    formRef.elements.email.value === '' ||
    formRef.elements.message.value === ''
  ) {
    alert('Заповніть всі поля');
  } else {
    console.log(userDate);
  }

  // console.dir(formRef.elements.email.value);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.target.reset();
};

// слушатили событий
formRef.addEventListener('input', throttle(onContactFormInput, 500));
formRef.addEventListener('submit', onContactFormSubmit);
