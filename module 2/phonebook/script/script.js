import control from './modules/control.js';
const {
  howerRow,
  modalControl,
  deleteControl,
  formControl,
} = control;

import render from './modules/render.js';
const {
  renderPhoneBook,
  renderContacts,
} = render;

import serviceStorage from './modules/serviceStorage.js';
const {
  getContactData,
} = serviceStorage;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = getContactData();
    const {
      list,
      logo,
      btnAdd,
      formOverLay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    // Функционал
    const allRow = renderContacts(list, data);
    const {closeModal} = modalControl(btnAdd, formOverLay);

    howerRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}
