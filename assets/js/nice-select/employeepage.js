const selectDepartment = document.querySelector('#select-department');
const selectRole = document.querySelector('#select-role');

const instance = NiceSelect.bind(selectDepartment, {
  searchable: false,
  placeholder: 'select department'
})
const instance2 = NiceSelect.bind(selectRole, {
  searchable: false,
  placeholder: 'select role'
})