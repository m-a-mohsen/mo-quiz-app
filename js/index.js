// toggle functionality of bookmark
const bookmarkCardButton = document.querySelector('[data-js="bookmark"]')

bookmarkCardButton.addEventListener('click', () => {
    const bookmarkStatus = bookmarkCardButton.getAttribute('src')
    if (bookmarkStatus === "./icons/bookmark.png") {
    bookmarkCardButton.setAttribute("src", "./icons/bookmark_filled.png");
} else {
    bookmarkCardButton.setAttribute("src", "./icons/bookmark.png");   
}
})
// SHOW answer toggle

const showAnswerButton = document.querySelector('[data-js="showAnswer"]');
const answer = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener('click', () => {
    if (showAnswerButton.innerHTML.includes('Show')) {
        showAnswerButton.innerHTML = "Hide answer";
    } else {
        showAnswerButton.innerHTML = "Show answer";
    }
    answer.toggleAttribute('hidden')
})
