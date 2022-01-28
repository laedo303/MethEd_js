'use strict';

const addElem = () =>{
  const ulList = document.querySelector('.list');

  return function addText() {
    const userText = prompt('input text:');

    if(userText === null) return;
    if(userText === '') return addText();
    if(userText === undefined) return;
    if(userText === 'exit') return;
    if(userText.length === 0) return;
    if(userText === 'del') {
      ulList.removeChild(ulList.lastChild);
      return addText();
    }
    else {
      const liElem = document.createElement('li');
      liElem.textContent = userText;
      ulList.append(liElem);
      addText();
    };

  //   switch (userText) {
  //     case null:
  //       return;
  //     case '':
  //       return addText();
  //     case undefined:
  //       return;
  //     case 'exit':
  //       return;
  //     case 0:
  //       return;
  //     case 'del':
  //       ulList.removeChild(ulList.lastChild);
  //       return addText();
  //     default:
  //       const liElem = document.createElement('li');
  //       liElem.textContent = userText;
  //       ulList.append(liElem);
  //       addText();
  //   }

  // }
};

const list = addElem();
console.log('list: ', list());