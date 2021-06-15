import { getLetters, sendLetter, getAuthors, getRecipients } from "./dataAccess.js"

export const Letter = () => {
    const letters = getLetters()
        //     let html
        //     if (letters.length === 0) {
        //         html = "Please write a letter"
        //     } else if (letters.length > 0) {
        //         //const latestLetter = letters[letters.length - 1]
        //         html = `Dear ${letters[letters.length - 1].recipient} `
        //     }

    const LatestLetter = letters[letters.length - 1]
    return `<div class="letter-body">
    Dear <br> ${LatestLetter.recipient} (${LatestLetter.recipientEmail}),
    <br>
    ${LatestLetter.letterContent}<br>
    Sincerely, <br> ${LatestLetter.author}(${LatestLetter.authorEmail})<br>
    Sent on ${LatestLetter.date} <br>
    <div class="user-topic">${LatestLetter.topic} </div> </div>
    
    `
}


let userRecipient
let userRecipientEmail
let userAuthor
let userAuthorEmail
let userTopic

let userTopicArr = []
document.addEventListener("change", e => {
    if (e.target.name === "topic") {
        userTopicArr.push(e.target.value)
    }
})

document.addEventListener("click", e => {
    if (e.target.id === "send") {
        const theRecipientIndex = document.getElementById("recipient-options").options.selectedIndex
        userRecipient = document.getElementById("recipient-options").options[theRecipientIndex].text

        const recipients = getRecipients()
        userRecipientEmail = recipients.find(recipient => { return recipient.id === theRecipientIndex }).email

        const userLetterContent = document.getElementById("letter").value

        const theAuthorIndex = document.getElementById("author-options").options.selectedIndex
        userAuthor = document.getElementById("author-options").options[theAuthorIndex].text

        const authors = getAuthors()
        userAuthorEmail = authors.find(author => { return author.id === theAuthorIndex }).email

        userTopic = userTopicArr.join(",  ")

        const dataToSendToAPI = {
            recipient: userRecipient,
            recipientEmail: userRecipientEmail,
            letterContent: userLetterContent,
            author: userAuthor,
            authorEmail: userAuthorEmail,
            topic: userTopic,
            date: Date(Date.now)
        }

        if (userRecipient) {
            sendLetter(dataToSendToAPI)
        }
    }
})