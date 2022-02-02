const getContactData = () => (localStorage.getItem('phoneBook') ?
  JSON.parse(localStorage.getItem('phoneBook')) : []);

const setContactData = data =>
  localStorage.setItem('phonebook', JSON.stringify(data));

const addContactData = contact => {
  const data = getContactData('phoneBook');
  data.push(contact);
  setContactData(data);
};

const removeContactData = phone => {
  const data = getContactData('phoneBook');
  const newData = data.filter(item => item.phone !== phone);
  setContactData(newData);
};

export default {
  getContactData,
  setContactData,
  addContactData,
  removeContactData,
};
