/* eslint-disable require-jsdoc */
// // import data from '../../../data';

// // const getContactData = () => (localStorage.phoneBook ?
// //   JSON.parse(localStorage.getItem('phoneBook')) : []);

// // const setContactData = (contact, key) => {
// //   contact = addContactData;
// //   if (localStorage.length > 0) {
// //     // addContactData(data);
// //   } else {
// //     localStorage.setItem('phonebook', JSON.stringify(data));
// //     // newArr.push(...localData, data);
// //   }
// // };

// const getContactData = (key) => {
//   const data = JSON.parse(localStorage.getItem('phoneBook'));
//   return localStorage.length > 0 ? data : [];
// };

// const addContactData = contact => {
//   let contacts = [];

//   if (localStorage.length > 0) {
//     contacts = JSON.parse(localStorage.getItem('phoneBook'));
//   } else {
//     contacts.push(contact);

//     localStorage.setItem('phoneBook', JSON.stringify(contacts));
//   }

//   // if (contacts) {
//   //   // localStorage.removeItem(key);
//   //   localStorage.setItem(key, JSON.stringify(contacts));
//   // }


//   // const newArr = [];
//   // if (localStorage.length > 0) {
//   //   const data = getContactData('phoneBook');
//   //   console.log('data: ', data);
//   // } else {
//   //   newArr.push(newContact);
//   //   localStorage.setItem('phonebook', JSON.stringify(newArr));
//   //   console.log('newArr: ', newArr);
//   // }

//   // data.push(newContact);
//   // // setContactData(data);
//   // return newContact;
// };

const getContactData = (key) => {
  const contact = JSON.parse(localStorage.getItem(key));
  return localStorage.length > 0 ? contact : [];
};


const addContactData = (key, contact) => {
  let contacts = [];
  if (localStorage.length > 0) {
    contacts = JSON.parse(localStorage.getItem(key));
  } else {
    localStorage.setItem(key, JSON.stringify(contact));
  }
  if (contacts) {
    localStorage.removeItem(key);
    contacts.push(contact);
    localStorage.setItem(key, JSON.stringify(contacts));
  }

  // const btnDel = document.querySelectorAll('.del-icon');
  // btnDel.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     // removeContactData(contact.phone);
  //   });
  // });
};

const removeStorage = (key, contact) => {
  const contacts = JSON.parse(localStorage.getItem(key));
  const newContacts = [];
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].phone != contact.phone) {
      newContacts.push(contacts[i]);
    }
  }

  localStorage.setItem(key, JSON.stringify(newContacts));
};

// function removeContactData(phone) {
//   const data = getContactData('phoneBook');
//   const newData = data.filter(item => item.phone !== phone);
//   addContactData(newData);
// }


// export const  deleteTodo = (arr, item) => {
//   console.log('arr: ', arr);
//   const newArr = arr.filter(obj => obj.id != item.id)
//   console.log('newArr: ', newArr);
//   return {
//       newArr,
//   }
// }

// export const deleteTodoFromStorage = (item, todo, userKey) => {
//   item.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.classList.contains('delete')) {
//     const todoArr = JSON.parse(localStorage.getItem(userKey));
//     const {newArr} = deleteTodo(todoArr, todo);
//     localStorage.setItem(userKey, JSON.stringify(newArr));
//   }
// });

// }


export default {
  getContactData,
  // setContactData,
  addContactData,
  // removeContactData,
  removeStorage,
};
