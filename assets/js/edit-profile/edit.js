const editButton = document.querySelector("#edit-profile");

editButton.addEventListener("click", showEditFields);

function showEditFields() {
  const inputFields = document.querySelectorAll(".inputfield");
  const selectField = document.querySelector(".selectfield");
  const niceSelect = document.querySelector(".nice-select");

  inputFields.forEach((inputField) => {
    inputField.removeAttribute("disabled");
  });
  selectField.removeAttribute("disabled");
  niceSelect.classList.remove("disabled");

  const logoutButton = document.querySelector(".log-out");
  const updateButton = document.querySelector(".btn-update");

  // HIDE LOGOUT BUTTON
  logoutButton.classList.add("d-none");
  // SHOW UPDATE BUTTON
  updateButton.classList.remove("d-none");
}
