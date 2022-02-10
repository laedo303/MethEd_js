import createElements from './createElements.js';
const {
  createRow,
} = createElements;

import serviceStorage from './serviceStorage.js';
const {
  addContactData,
  getContactData,
  // removeContactData,
  removeStorage,
} = serviceStorage;


const howerRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

const modalControl = (btnAdd, formOverLay) => {
  const openModal = () => {
    formOverLay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverLay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverLay.addEventListener('click', e => {
    const target = e.target;
    if (target === formOverLay || target.closest('.close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    if (e.target.closest('.del-icon')) {
      const tr = e.target.closest('tr');
      const firstname = tr.querySelector('td:nth-child(2)').textContent;
      const surname = tr.querySelector('td:nth-child(3)').textContent;
      const number = tr.querySelector('td:nth-child(4)').textContent;

      const contact = {
        name: firstname,
        surname,
        phone: number,
      };
      removeStorage('phoneBook', contact);
      e.target.closest('.contact').remove();
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

const addContactPageFromLocal = (list) => {
  let contacts = [];
  if (localStorage.length > 0) {
    contacts = JSON.parse(localStorage.getItem('phoneBook'));
    const allRow = contacts.map(createRow);
    list.append(...allRow);
    return allRow;
  } else {
    return;
  }
};

// const remove

const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    getContactData(newContact.phone);
    addContactPage(newContact, list);
    addContactData('phoneBook', newContact);

    // removeContactData(newContact.phone);

    form.reset();
    closeModal();
  });
};

export default {
  howerRow,
  modalControl,
  deleteControl,
  formControl,
  addContactPageFromLocal,
};
