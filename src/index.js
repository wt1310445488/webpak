/*
Author: What (1310445488@qq.com)
index.js (c) 2022
Desc: description
Created:  2022-02-10T08:47:32.577Z
Modified: 2022-02-11T05:44:39.711Z
*/
import _ from 'lodash';
import iconPng from "./icon.jpg";
import './index.less';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpa2111ck'], ' 1212212');
  const myIcon = new Image();
  myIcon.src = iconPng;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
