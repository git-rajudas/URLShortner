const { isLoggedIn } = require("../middlewares/isLoggedIn");

const singUpBtn = document.querySelector("#signupBtn");

if(isLoggedIn){
    singUpBtn.textContent = "<%= user.username %>"
}