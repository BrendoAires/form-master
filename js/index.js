const first_name = document.getElementById("first_name").value;
const last_name = document.getElementById("last_name").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("password").value;

const submit = document.getElementById("button_submit");
submit.addEventListener('click', ()=>{
    console.log(first_name, last_name, email, senha);
})