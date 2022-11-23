const paragraph = document.querySelector("#textDescription");
const editParagraph = document.querySelector("#editParagraph");

let counter = 0;

window.localStorage.getItem("Counter") != undefined &&
  (paragraph.textContent = window.localStorage.getItem("ParagraphValue"));

editParagraph.addEventListener("click", (e) => {
  counter++;
  const newParagraph = prompt("Digite o novo paragrafo");

  paragraph.textContent = newParagraph;
  window.localStorage.setItem("ParagraphValue", paragraph.textContent);
  window.localStorage.setItem("Counter", counter);
});
