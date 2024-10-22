import _ from 'lodash';
import './assets/styles/style.css'
import { square, cube } from './math.js'

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me 123456';
  btn.onclick = () => {
    console.log('onclick: ', 123);
  };

  element.appendChild(btn);

   return element;
 }

//  document.body.appendChild(component());
 let element = component(); // 存储 element，以在 print.js 修改时重新渲染
 document.body.appendChild(element);