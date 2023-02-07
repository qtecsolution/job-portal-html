const selectDepartment = document.querySelector('#select-');

const instance = NiceSelect.bind(selectDepartment, {
  searchable: false,
  placeholder: 'select department'
})
