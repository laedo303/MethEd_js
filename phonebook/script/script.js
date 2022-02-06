import dataArr from '../../data.js';
import renderPhoneBook from './modules/render.js';
import createElements from './modules/createElements.js';
const {createRow} = createElements;

// const renderContacts = (elem, data) => {
//   const allRow = data.map(createRow);
//   elem.append(...allRow);
//   return allRow;
// };

// const howerRow = (allRow, logo) => {
//   const text = logo.textContent;
//   allRow.forEach(contact => {
//     contact.addEventListener('mouseenter', () => {
//       logo.textContent = contact.phoneLink.textContent;
//     });
//     contact.addEventListener('mouseleave', () => {
//       logo.textContent = text;
//     });
//   });
// };

const getLocalStorage = () => {
  if (localStorage.length > 0) {
    return localStorage.getItem(JSON.parse('phoneBook'));
  } else return [];
};

const setLocalStorage = (arr) => {
  localStorage.setItem('phoneBook', JSON.stringify(arr));
};

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  const phoneBook = renderPhoneBook(app, title);
  const {list, btnAdd, formOverLay, form, btnDel} = phoneBook;

  // ! Функционал
  // const allRow = renderContacts(list, data);

  // howerRow(allRow, logo);

  btnAdd.addEventListener('click', () => {
    formOverLay.classList.add('is-visible');
    getLocalStorage();
  });

  formOverLay.addEventListener('click', e => {
    if (e.target === formOverLay || e.target.closest('.close')) {
      formOverLay.classList.remove('is-visible');
    }
  });

  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    if (e.target.closest('.del-icon')) {
      e.target.closest('.contact').remove();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    console.log('contact: ', newContact);

    dataArr.push(newContact);
    console.log('data: ', dataArr);

    setLocalStorage(dataArr);

    list.append(createRow(newContact));
  });
};


console.log(dataArr);
window.phoneBookInit = init;
