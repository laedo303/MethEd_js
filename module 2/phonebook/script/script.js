'use strict';


const {
  howerRow,
  modalControl,
  deleteControl,
  formControl,
} = require('./modules/control');


const {
  renderPhoneBook,
  renderContacts,
} = require('./modules/render');

const {
  getContactData,
} = require('./modules/serviceStorage');

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
