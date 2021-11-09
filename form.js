
let errors=[];

function checkValidity(input){
    let validity = input.validity;
    if(validity.valueMissing){
        errors.push('Поле ' + input.placeholder +' не заполнено');
    }
    if (validity.patternMismatch){
        errors.push('неверное поле ' + input.placeholder);
    }
}

function checkAll(){
    errors = []; 
    let inputs = document.querySelectorAll("input")

    for (let input of inputs){
        checkValidity(input);
    }

    document.getElementById('errorsMessage').innerHTML= errors.join('. <br>');
}


postButton.onclick = function(evn){
    evn.preventDefault();
    let user={
        email:document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value,
        phone: document.getElementById("inputPhone").value,
    }
    console.log(user)
    fetch("https://httpbin.org/post",{
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
        'Content-Type': 'applicstion/json; charset=utf-8'
    },
    })
    .then(Response => Response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}

/*function checkAll()
{
    let email = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    let address = document.getElementById("inputAddress");
    let city = document.getElementById("inputCity");
    let state = document.getElementById("inputState");

    document.getElementById('errorMessage') .innerHTML = "";

    if (email.value == ''){
        document.getElementById('errorMessage').innerHTML += "Ваш электронный адрес не заполнен <br> "  
    }

    if (password.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш пароль не заполнен <br>"  
    }
    if (password.value.length < 6){
        document.getElementById('errorMessage') .innerHTML += "Пароль должен содержать не меньше 6 символов <br>"  
    }

    if (address.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш адрес не заполнен <br>"  
    }

    if (city.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш город не заполнен <br>"  
    }

    if (state.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш статус не заполнен <br>"  
    }


    if (email.value != '' && password.value != '' && password.value.length >= 6 && address.value != '' && city.value != '' &&
    state.value != ''){
    alert ("Добро пожаловать");
    }
}*/



