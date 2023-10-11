// toggle functionality of bookmark
// const bookmarkCardButton = document.querySelector('[data-js="bookmark"]')
const svgBookmark = document.querySelector('[data-js="svgBookmark"]')
console.log(svgBookmark);

svgBookmark.addEventListener('click', () => {
    // const bookmarkStatus = bookmarkCardButton.classList.contains()
    if (svgBookmark.classList.contains("fill-slate-50")) {
    //     svgBookmark.classList.add("fill-lime-500");
        //   svgBookmark.classList.remove("fill-slate-50");
        svgBookmark.setAttribute(
          "class",
          "h-10 w-10 absolute right-2 -top-4 stroke-gray-700 fill-lime-500 hover:fill-lime-500 hover:scale-110 transition duration-300"
        );
    } else {
        //   bookmarkCardButton.setAttribute("src", "./icons/bookmark.png");
        // svgBookmark.classList.add("fill-lime-500");
                svgBookmark.setAttribute(
                  "class",
                  "h-10 w-10 absolute right-2 -top-4 stroke-gray-700 fill-slate-50 hover:fill-lime-500 hover:scale-110 transition duration-300",
                );
    }
})
//SHOW answer toggle

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
