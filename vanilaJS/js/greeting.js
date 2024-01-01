const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) // saving username when user LOGIN
{ 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);

    paintGreetings();
}

function paintGreetings() // save username text and greeting to user
{
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) // username is not saved -> LOGIN
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else // username saved -> just greeting
{
    paintGreetings();
}