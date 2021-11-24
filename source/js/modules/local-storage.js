const FORM = `form`;
const INPUT = `input`;
const INPUT_TYPE = `email`;
const USER_EMAIL = `user-email`;

document.addEventListener(`DOMContentLoaded`, () => {
  const forms = document.querySelectorAll(`${FORM}`);

  if (forms) {
    forms.forEach((form) => createStorage(form));
  }
});

export function createStorage(form) {
  const formFields = form.querySelectorAll(`${INPUT}`);

  if (formFields) {
    formFields.forEach((field) => {
      if (field.type === INPUT_TYPE && localStorage.getItem(USER_EMAIL)) {
        field.value = localStorage.getItem(USER_EMAIL);
      }

      field.addEventListener(`change`, saveData);
    });
  }
}

function saveData(evt) {
  if (evt.target.type === INPUT_TYPE) {
    localStorage.setItem(USER_EMAIL, evt.target.value);
  }
}
