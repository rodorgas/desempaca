// ==UserScript==
// @name         Desempaca
// @namespace    https://github.com/rodorgas/desempaca
// @version      0.1
// @description  Login automático no Paca (Moodle)
// @author       Rodrigo Orem
// @match        https://paca.ime.usp.br/*
// ==/UserScript==

(function() {
  'use strict';
  let onLogin = location.href == 'https://paca.ime.usp.br/login/index.php';

  if (onLogin) {
    setTimeout(function() {
      document.querySelector('#loginbtn').click()
    }, 1000);
  }
  else {
    let deslogado = document.querySelector('.login').innerText
      .includes('Você ainda não se identificou');

    if (deslogado)
      location.href = 'https://paca.ime.usp.br/login/index.php';
  }
})();
