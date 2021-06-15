import { getRecipients } from "./dataAccess.js"

export const Recipient = () => {
    let html = "<select id='recipient-options'> <option>please choose a recipient</option>"

    const recipients = getRecipients()

    html += recipients.map(recipient => {
        return `<option value='${recipient.id}'>${recipient.name}</option>`
    }).join("")


    html += "</select>"
    return html

}