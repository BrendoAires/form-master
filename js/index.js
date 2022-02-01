

const submit = document.getElementById("button_submit");
submit.addEventListener('click', ()=>{
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if(first_name !="" ){
        label1 = document.getElementById("erro_first");
        label1.classList.remove("msg-erro");
        document.getElementById("first_name").classList.remove("input-erro");
        label1.innerHTML = "";
        document.getElementById("first_name").classList.add("input-ok");
        alert("Enviado com sucesso")
        document.getElementById("first_name").value = "";

        

    }
    else{
        label1 = document.getElementById("erro_first");
        label1.classList.add("msg-erro");
        document.getElementById("first_name").classList.add("input-erro");
        label1.innerHTML = "First Name cannot be empty";
    }
    /* if (last_name !="" ){
        label2 = document.getElementById("erro_last");
        label2.classList.remove("msg-erro");
        alert("Enviado com sucesso")

    }
    else{
        label2 = document.getElementById("erro_last");
        label2.classList.add("msg-erro");
        label2.innerHTML = "Last Name cannot be empty";
    }

    if(email !="" ){
        label3 = document.getElementById("erro_email");
        label3.classList.remove("msg-erro");
        alert("Enviado com sucesso")

    }
    else{
        label3 = document.getElementById("erro_email");
        label3.classList.add("msg-erro");
        label3.innerHTML = "Email cannot be empty";
    }

    if(senha !="" ){
        label4 = document.getElementById("erro_senha");
        label4.classList.remove("msg-erro");
        alert("Enviado com sucesso")

    }
    else{
        label4 = document.getElementById("erro_senha");
        label4.classList.add("msg-erro");
        label4.innerHTML = "Password cannot be empty";
    }
*/
    
})