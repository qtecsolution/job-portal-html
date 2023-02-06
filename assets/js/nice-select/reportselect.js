const department = document.querySelector('#department');

const instance = NiceSelect.bind(department, {
  searchable: false,
  placeholder: 'Select department'
});