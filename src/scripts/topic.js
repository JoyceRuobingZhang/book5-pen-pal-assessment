import { getTopics } from "./dataAccess.js"

export const Topic = () => {
    let html = "<ul class='topic-options'>"

    const topics = getTopics()

    html += topics.map(topic => {
        return `<li><input type="checkbox" name="topic" value="${topic.name}" />${topic.name}</li>`
    }).join("")


    html += "</select>"
    return html

}