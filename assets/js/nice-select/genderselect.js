const selectGender = document.querySelector("#select-gender");

const instance = NiceSelect.bind(selectGender, {
  searchable: false,
  placeholder: "Select your gender",
});
