import createElements from './createElements.js';
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
} = createElements;


const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createlogo(title);
  const main = createMain();
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
  const footer = createFooter();
  const FooterLogo = createFooterLogo(title);

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


export default {
  renderPhoneBook,
  renderContacts,
};
