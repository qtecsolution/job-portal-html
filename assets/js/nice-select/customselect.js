const selectGender = document.querySelector('#select-department');

const instance = NiceSelect.bind(selectGender, {
  searchable: false,
  placeholder: 'Select Department'
});