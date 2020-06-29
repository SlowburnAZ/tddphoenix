import socket from './socket';

class ChatRoom {
    constructor(options) {
        this.channel = socket.channel(`chat_room:${options.chatRoomName}`, {});
        this.messageForm = options.messageForm;
        this.messageInput = options.messageInput;
        this.messagesContainer = options.messagesContainer;
    }

    setup() {
        this.messageForm.addEventListener("submit", event => {
            event.preventDefault();

            this.channel.push("new_message", { body: messageInput.value })

            event.target.reset();
        });

        this.channel.on("new_message", payload => {
            let messageItem = document.createElement("li");
            messageItem.dataset.role = "message";
            messageItem.innerText = payload.body;
            this.messagesContainer.appendChild(messageItem);
        });

        this.channel.join()
            .receive("ok", resp => { })
            .receive("error", resp => { })
    }
}

let chatRoomTitle = document.getElementById("chat-room-title");

if (chatRoomTitle) {
    let options = {
        chatRoomName: chatRoomTitle.dataset.chatRoomName,
        messageForm: document.getElementById("new-message-form"),
        messageInput: document.getElementById("message"),
        messagesContainer: document.querySelector("[data-role='messages']")
    }

    let chatRoom = new ChatRoom(options);
    chatRoom.setup();
}