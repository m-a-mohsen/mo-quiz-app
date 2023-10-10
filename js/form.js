// create Cards
const form = document.querySelector('[data-js="form"]');
// form.preventDefault
form.addEventListener("submit", (e) => {
  e.preventDefault();
//   console.log(e);
    //   console.log(form);
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
    
    const card = document.createElement('section');
    card.setAttribute(
  "class",
  "group relative flex flex-col items-center justify-between rounded-xl bg-gray-100 p-4 hover:bg-white",
);

const cardOutline = document.createElement('div')
card.setAttribute(
  "class",
  "absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-70 blur-sm group-hover:-inset-1",
);
const bookmarkButton = document.createElement('button');

const svgBookmark = document.createElement('svg');
svgBookmark.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgBookmark.setAttribute("fill", "none");
svgBookmark.setAttribute("viewBox", "0 0 24 24");
svgBookmark.setAttribute("stroke-width", "1");
svgBookmark.setAttribute("stroke", "currentColor");
svgBookmark.setAttribute(
  "class",
  "h-10 w-10 absolute right-2 -top-4 fill-slate-50",
);

const pathSvgBookmark = document.createElement('path')
pathSvgBookmark.setAttribute("stroke-linecap", "round");
pathSvgBookmark.setAttribute("stroke-linejoin", "round");

pathSvgBookmark.setAttribute('d', "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z")

const question = document.createElement('h2');
question.textContent = formObj.yourQuestion
question.setAttribute(
  "class",
  "drop-shadow-inner bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text py-6 text-3xl font-black capitalize text-transparent",
);
    


});