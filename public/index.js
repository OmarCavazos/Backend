const socket = io();
const form = document.querySelector("#form")
const user=document.querySelector("#user")
const userMessage = document.querySelector("#userMessage")
const chat = document.querySelector("#chat")

let dataGet = null

const addMessage =(data) => {
    const messages = data.map((m,i) =>{
        if (m.user === dataGet[i-1]?.user) {
            return`
            <dd>${m.message}</dd>`
        } else {
            return `<dt>${m.user}</dt>
            <dt>${m.message}</dt>`
            }
        }
        ).join("")
    chat.innerHTML = messages
}


socket.on("messages", (data) => {
    dataGet = data    
    addMessage(data)
})

form.onsubmit = (e) => {
    e.preventDefault()
    const isUser = dataGet.some(u=>u.user===user.value)
        if (isUser) {
            alert("ese usuario ya existe")
        } else {
            const message = {
                user:user.value,
                message: userMessage.value
            }
            socket.emit("newMessage", message)
            userMessage.value = ""
            user.style.display = "none"
        }
}