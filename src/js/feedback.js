const form = () => document.querySelector('[data-feedback="form"]');
const selectedValues = () => document.querySelectorAll("[data-feedback-selected-value]");
const questionsContainer = () => document.querySelector('[data-feedback="questions"]');
const questionValues = () => document.querySelectorAll("[data-feedback-value]");

const toggleQuestionsContainer = addOrRemove => questionsContainer().classList.toggle("hidden", addOrRemove);
const hideQuestions = () => [...questionValues()].map(el => el.classList.add("hidden"));
const showQuestion = value =>
  form()
    .querySelector(`[data-feedback-value="${value}"]`)
    .classList.remove("hidden");

const updateFormForCustomizationUpdate = id => {
  form().setAttribute("action", `/api/customizations/${id}`);
  form().insertAdjacentHTML("beforeend", '<input type="hidden" name="_method" value="PUT">');
};

const sendFeedback = () => {
  return fetch(form().getAttribute("action"), {
    method: form().getAttribute("method"),
    body: new FormData(form())
  })
    .then(res => res.json())
    .then(res => updateFormForCustomizationUpdate(res.id))
    .catch(e => {
      throw new Error(e);
    });
};

const onRatingSelected = event => {
  const selectedValue = event.target.value;
  toggleQuestionsContainer(true);
  hideQuestions();

  sendFeedback().then(() => {
    showQuestion(selectedValue);
    toggleQuestionsContainer(false);
  });
};

document.addEventListener("turbolinks:load", () => {
  if (form()) {
    [...selectedValues()].map(el => el.addEventListener("change", onRatingSelected));
  }
});
