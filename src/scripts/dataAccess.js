const applicationState = {}

const API = "http://localhost:8001"

export const fetchLetter = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(allLetters => {
            applicationState.letters = allLetters
        })
}

let authors = []
export const fetchAuthor = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(allAuthors => {
            authors = allAuthors
        })
}


let recipients = []
export const fetchRecipient = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(allRecipients => {
            recipients = allRecipients
        })
}


let topics = []
export const fetchTopic = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(allTopics => {
            topics = allTopics
        })
}


export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }
    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(response => {
            applicationState.letters.push(response)
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter }))
}

export const getAuthors = () => {
    return authors.map(author => ({...author }))
}

export const getRecipients = () => {
    return recipients.map(recipient => ({...recipient }))
}

export const getTopics = () => {
    return topics.map(topic => ({...topic }))
}