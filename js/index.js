

function notEmpty(element){
    return element !== "";
}

regBtn.addEventListener("click", () => {

    let inputs = [password.value, email.value];

    if (inputs.every(notEmpty)){
        windows.location.href="frontpage.html";
    } else {
        alert("Complete los campos");
    }
});

