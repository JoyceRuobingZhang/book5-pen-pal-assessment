import { getAuthors } from "./dataAccess.js"

export const Author = () => {
    let html = "<lable for='author'> <select id='author-options'> <option>please choose an author</option>"

    const authors = getAuthors()

    html += authors.map(author => {
        return `
        
        <option value="${author.id}">${author.name}</option>`
    }).join("")


    html += "</select></lable>"
    return html

}