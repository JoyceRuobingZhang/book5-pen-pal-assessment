import { fetchLetter, fetchAuthor, fetchRecipient, fetchTopic } from "./dataAccess.js"
import { PenPalSociety } from "./penPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthor().then(() => {
        fetchRecipient().then(() => {
            fetchTopic().then(() => {
                fetchLetter().then(() => {
                    mainContainer.innerHTML = PenPalSociety()
                })
            })
        })
    })
}
render()

document.addEventListener("stateChanged", e => {
    render()
})

// 🔴🔴🔴announce in smaller scope (leaf)
// 🔴🔴🔴listen in the bigger/equal scope (tree trunk)

//.innerHTML can be risky. React will cpoy it for you and inspect every element.