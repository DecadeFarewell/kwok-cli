import _ from 'lodash';
import printMe from './print.js';
import './style.css'

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me 123456';
  btn.onclick = printMe;

  element.appendChild(btn);

   return element;
 }

//  document.body.appendChild(component());
 let element = component(); // 存储 element，以在 print.js 修改时重新渲染
 document.body.appendChild(element);