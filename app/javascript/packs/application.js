// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('DOMContentLoaded', function (event) {
  var input_usuario = document.getElementById('usuario_nome')
  input_usuario.addEventListener("blur", function( event ) {

    if(input_usuario.value.length > 0){

      fetch('/consulta_usuario').then(response => response.json())
      .then(dados => {
          document.getElementById('usuario_email').value = dados.email
      }); 
      
    }

    }, true); 
})



