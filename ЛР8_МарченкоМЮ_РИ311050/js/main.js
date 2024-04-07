let answerSubmit = document.querySelector('.form_btn');

function checkName() {
    let name = document.getElementById("name").value;
    let regex = /^[A-Za-zА-Яа-яЁё]{2,15}$/;

    if (regex.test(name)) {
        document.getElementById("check_name").style.color = 'green';
        document.getElementById("check_name").innerHTML = "✔";
        return true;        
    }
    else {
        document.getElementById("check_name").style.color = 'red';
        document.getElementById("check_name").innerHTML = "Введите имя, состоящее как минимум из 2 символов, используя только буквы.";
        return false;
    }
}

function checkTel() {
    let tel = document.getElementById("tel").value;
    let regex = /^8-9[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    if (regex.test(tel)) {
        document.getElementById("check_tel").style.color = 'green';
        document.getElementById("check_tel").innerHTML = "✔";
        return true;        
    }
    else {
        document.getElementById("check_tel").style.color = 'red';
        document.getElementById("check_tel").innerHTML = "Формат номера: 8-XXX-XXX-XX-XX";
        return false;
    }
}

function checkEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (regex.test(email)) {
        document.getElementById("check_email").style.color = 'green';
        document.getElementById("check_email").innerHTML = "✔";
        return true;        
    }
    else {
        document.getElementById("check_email").style.color = 'red';
        document.getElementById("check_email").innerHTML = "Формат Email: test123@example.com";
        return false;
    }
}

function checkProduct() {
    let selectElement = document.getElementById("product_select").value;

    if (selectElement == "err") {
        document.getElementById("check_product").style.color = 'red';
        document.getElementById("check_product").innerHTML = "Выберите продукт.";
        return false;    
    }
    else {
        document.getElementById("check_product").style.color = 'green';
        document.getElementById("check_product").innerHTML = "✔";
        return true;  
    }
}

function sendOrder(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;
    let selectElement = document.getElementById("product_select").value;

    if (name != '' && tel != '' && email != '' && selectElement != 'err') {
        alert("Заказ принят!")
        document.getElementById("name").value = '';
        document.getElementById("tel").value = '';
        document.getElementById("email").value = '';
        document.getElementById("product_select").value = 'err';
        document.getElementById("check_name").innerHTML = '';
        document.getElementById("check_email").innerHTML = '';
        document.getElementById("check_tel").innerHTML = '';
        document.getElementById("check_product").innerHTML = '';
    } else {
        alert("Попробуйте еще раз!")
        document.getElementById("name").value = '';
        document.getElementById("tel").value = '';
        document.getElementById("email").value = '';
        document.getElementById("product_select").value = 'err';
        document.getElementById("check_name").innerHTML = '';
        document.getElementById("check_email").innerHTML = '';
        document.getElementById("check_tel").innerHTML = '';
        document.getElementById("check_product").innerHTML = '';
    }
}

answerSubmit.addEventListener("click", sendOrder);
