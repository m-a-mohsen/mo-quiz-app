// create Cards
const form = document.querySelector('[data-js="form"]');
const newCards = document.querySelector('[data-js="newCards"]');
// form.preventDefault
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  //   console.log(form);
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  console.log(formObj);

  const card = document.createElement("div");
  card.setAttribute(
    "class",
    "group relative flex flex-col items-center justify-between rounded-xl bg-gray-100 p-4 hover:bg-white transition duration-500",
  );

  const cardOutline = document.createElement("div");
  cardOutline.setAttribute(
    "class",
    "absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-70 blur-sm group-hover:-inset-1 group-transition duration-500",
  );

  // card.append(cardOutline) ;

  const bookmarkButton = document.createElement("button");

 
bookmarkButton.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.3" stroke="currentColor" class="h-10 w-10 absolute right-2 -top-4 fill-slate-50 stroke-gray-700 hover:fill-lime-500 hover:scale-110 transition duration-300" ><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>';

  const question = document.createElement("h2");
  question.textContent = formObj.yourQuestion;
  question.setAttribute(
    "class",
    "drop-shadow-inner bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text py-6 text-3xl font-black capitalize text-transparent",
  );
  const answerButton = document.createElement("button");
  answerButton.textContent = "Show answer";

  answerButton.setAttribute(
    "class",
    "mb-4 cursor-pointer rounded-lg border-b-[4px] border-fuchsia-500 bg-gray-300 px-6 text-gray-700 shadow-fuchsia-500 transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:shadow-xl hover:shadow-fuchsia-300 hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] active:shadow-none active:brightness-90",
  );

  const answer = document.createElement("span");
  answer.textContent = formObj.yourAnswer;

  answer.setAttribute("class", "text-gray-600");
  answer.setAttribute("data-js", "answer");
  answer.setAttribute("hidden",'');

  answerButton.addEventListener('click', () => {
        if (answerButton.innerHTML.includes('Show')) {
        answerButton.innerHTML = "Hide answer";
    } else {
        answerButton.innerHTML = "Show answer";
    }
    answer.toggleAttribute('hidden')});


  const divider = document.createElement("hr");
  divider.setAttribute("class", "m-2 h-px w-full border-0 bg-gray-300 px-4");

  const hashTagContainer = document.createElement("div");
  hashTagContainer.setAttribute("class", "mt-2 self-start text-gray-600");

  const hashTag = document.createElement("span");
  hashTag.textContent = `#${formObj.tag}`;
  hashTag.setAttribute(
    "class",
    "cursor-default rounded-lg bg-gray-200 px-2 py-0.5 shadow-[inset_0px_-0px_3px_2px_#00000024] hover:bg-gray-300",
  );

  hashTagContainer.append(hashTag) ;

  card.append(
    cardOutline,
    bookmarkButton,
    question,
    answerButton,
    answer,
    divider,
    hashTagContainer,
  );
  newCards.append(card);
});

// counter function
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');

const questionNumberOfChars = document.querySelector('[data-js="questionCounter"]');
const answerNumberOfChars = document.querySelector('[data-js="answerCounter"]');

questionInput.addEventListener('input', () => {
  console.log(questionInput.value.length);
  let remainingCharacters = 150 - questionInput.value.length;
  questionNumberOfChars.textContent = `${remainingCharacters} characters left`
})
