"use strict";

const inputEL =document.querySelector(".input-chat");
const btnEl = document.querySelector(".fa-paper-plane");
const cardBodyEl = document.querySelector(".card-body");
 
let userMessage;

function manageChat() {
    
    userMessage = inputEL.value.trim();

    if(!userMessage) return;
    inputEL.value = "";

    cardBodyEl.appendChild(messageEl(userMessage, "user"));

    setTimeout(() => {
        cardBodyEl.appendChild(messageEl("Welcome to LiveChat", "chat-bot"));
    }, 600);
}
//messages

const messageEl = (message, className) => {
    const chatEl = document.createElement('div');
    chatEl.classList.add('chat', `${className}`);
    let chatContent =
        className === "chat-bot"
            ? `<span class="user-icon"><i class="fa fa-robot"></i></span>
            <p>${message}</p>`
            : `<span class="user-icon"><i class="fa fa-user"></i></span>
            <p class="userp"> ${message} </p>`;
    chatEl.innerHTML = chatContent;
    return chatEl;
};

btnEl.addEventListener("click", manageChat);
