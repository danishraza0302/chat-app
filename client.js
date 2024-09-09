const socket = io('http://localhost:8000');

const form = document.getElementById('send-cointainer');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")


const name = prompt("Enter your name to join the Chat");
socket.emit('new-user-joined', name)