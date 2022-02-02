import createElements from './createElementsjs';
const {
  createRow,
} = createElements;

import serviceStorage from './modules/serviceStorage.js';
const {
  addContactData,
  removeContactData,
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
      e.target.closest('.contact').remove();
      removeContactData();
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);
    addContactData(newContact);
    form.reset();
    closeModal();
  });
};

export default {
  howerRow,
  modalControl,
  deleteControl,
  formControl,
};
