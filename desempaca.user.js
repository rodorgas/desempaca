// ==UserScript==
// @name         Desempaca
// @namespace    https://github.com/rodorgas/desempaca
// @version      0.1
// @description  Login automático no Paca (Moodle)
// @author       Rodrigo Orem
// @match        https://paca.ime.usp.br/*
// ==/UserScript==

'use strict';
let loginURL = 'https://paca.ime.usp.br/login/index.php';

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

if (location.href == loginURL) {
  const alerta = document.querySelector('div.alert.alert-danger');
  if (!alerta) {
    alert('oi');
    eventFire(document.getElementById('body'), 'click');

    setTimeout(function() {
      //alert('oi');

      alert(document.querySelector('#password').value);
      //document.querySelector('#password').click();
      //document.querySelector('#loginbtn').click();
    }, 1000);
  }
}
else {
  let deslogado = document.querySelector('.login').innerText
    .includes('Você ainda não se identificou');

  if (deslogado)
    location.href = 'https://paca.ime.usp.br/login/index.php';
}
