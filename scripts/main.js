import {createElems} from './modules/createElems.js';
import {delayText} from './modules/delayText.js';

{
  const init = () => {
    createElems();
    delayText();
  };

  window.slowInput = init;
}
