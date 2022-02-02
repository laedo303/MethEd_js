'use strict';

const {
  createHeader,
  createlogo,
  createMain,
  crerateButtonsGroup,
  createTable,
  createForm,
  createFooter,
  createFooterLogo,
  createRow,
} = require('./createElements');


const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createlogo(title);
  const main = createMain();
  const footer = createFooter();
  const FooterLogo = createFooterLogo(title);
  const buttonGroup = crerateButtonsGroup([
    {
      className: 'btn btn-primary mr-3 js-add',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();
  const {form, overlay} = createForm();

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  footer.footerContainer.append(FooterLogo);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverLay: overlay,
    form,

  };
};

const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};

module.exports = {
  renderPhoneBook,
  renderContacts,
};
