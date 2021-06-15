import { Author } from "./author.js"
import { Recipient } from "./recipient.js"
import { Topic } from "./topic.js"
import { Letter } from "./letter.js"


export const PenPalSociety = () => {
    return `
    <h1>Pen Pal Society</h1>
    <div class="forms">
        <div class="form authors">
        <h3>Authors</h3>
        ${Author()}
        </div>
        
        <div class="form letter-input">
        <h3 class="write">Write a Letter</h3>
        <lable for='letter'></lable>
        <textarea id="letter"></textarea>
        </div>

        <div class="form recipients">
        <h3>Recipients</h3>
        ${Recipient()}
        </div>
    </div>

        <div class="topics">
        <h3>Topics</h3>
        ${Topic()}
        </div>

    

    <button id="send">Send Letter</button>

    <div class="letters">
    <h2> Letter </h2>
    ${Letter()}
    </div>

    `
}