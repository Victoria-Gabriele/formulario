document.addEventListener('DOMContentLoaded', () =>{
const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit',function(event){
event.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;

alert(`Seja bem vindo,${nome}. Enviaremos uma mensagem de confirmação pelo email: ${email} `);
});
});

