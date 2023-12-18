const socket = new WebSocket('ws://upgraded-giggle-g7jv95j9rvx3pp9q-8080.app.github.dev/');
const list = document.querySelector('ul');

socket.onmessage = ({data}) => {
    console.log(data);
    let li = document.createElement('li');
    li.textContent = data;
    list.appendChild(li)
}

document.querySelector('button').addEventListener('click', () => {
    socket.send(document.querySelector('input').value);
    console.log("Message sent");
})

