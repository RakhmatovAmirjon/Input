let form = document.forms.login;
let inputs = document.querySelectorAll("input.required");
let success = document.querySelector(".success");
let error = document.querySelector(".error");
let submit = document.querySelector(".submit");
let err = 0;
let succ = 7;

let regEx = {
  name: /^[a-zA-Z]*$/,
  age: /^\S[0-9]{0,3}$/,
  about: /^[a-zA-Z]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  js: /^[a-zA-Z]*$/,
  html: /^[a-zA-Z]*$/,
  css: /^[a-zA-Z]*$/,
  number:/^998\d{9}$/
};

let obj = {};

form.onsubmit = (e) => {
  e.preventDefault();
  err = 0;
  succ = 7;
  let fm = new FormData(form);

  fm.forEach((value, key) => {
    obj[key] = value;
  });

  console.log(obj);

  validateInputs();
};

function validateInputs() {
  inputs.forEach((inp) => {
    let id = inp.id;
    if (inp.value === "") {
      inp.style.border = "2px solid red";
      err++;
      error.innerHTML = err;
      success.innerHTML = succ - err;
    } else if (!regEx[id].test(inp.value)) { 
      inp.style.border = "2px solid red";
      err++;
      error.innerHTML = err;
      success.innerHTML = succ - err;
    } else {
      inp.style.border = "";
      error.innerHTML = "0";
      success.innerHTML = "7";
    }
  });
}