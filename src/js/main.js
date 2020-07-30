import {Larry} from './larry';

(() => {
  const larry = new Larry();

  larry.initialize();
  
    document.querySelector('button').addEventListener('click', (event) => {
      larry.sayHello();
    });
})();