import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
// строка-ключ в локалсор.
const LOCALSTORAGE_KEY = 'feedback-form-state';
// объект для localStorage
const userDate = {};
// функция для записи данных из локалстор. в форму
const fillContactFormElements = () => {
  // получаем в переменную объект из локал сторидж, предварительно распарсив джейсон-строку
  const userDataFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  //цыклом проходим по каждому ключу объекта
  for (const prop in userDataFromLS) {
    //   только по собственным свойствам
    if (userDataFromLS.hasOwnProperty(prop)) {
      // записуем данные с объекта в форму
      formRef.elements[prop].value = userDataFromLS[prop];
    }
  }
  //   console.log(userDataFromLS);
};
// вызов функции
fillContactFormElements();
// Запись данных в локалсторэдж при введение в инпут
const onContactFormInput = event => {
  // значения имени и данных записуем в переменные
  const name = event.target.name;
  const value = event.target.value;
  // имя и данные записуем в объект
  userDate[name] = value;
  //   console.log(userDate);
  // записуем объект с новыми данными в локалстор., превратив его в стору
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDate));
};
// Очищение формы и локалстор. при сабмите
const onContactFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(userDate);
};
// слушатили событий
formRef.addEventListener('input', throttle(onContactFormInput, 500));
formRef.addEventListener('submit', onContactFormSubmit);
