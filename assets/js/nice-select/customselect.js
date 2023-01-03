const selectDepartment = document.querySelector('#select-department');
const selectExperience = document.querySelector('#select-experience');
const selectJobtype = document.querySelector('#select-jobtype');
const selectEmploymenttype = document.querySelector('#select-employmenttype');
const selectCurrency = document.querySelector('#select-currency');
const selectSalarytype = document.querySelector('#select-salarytype');
const selectCountry = document.querySelector('#select-country');
const selectState = document.querySelector('#select-state');
const selectCity = document.querySelector('#select-city');

const instance = NiceSelect.bind(selectDepartment, {
  searchable: false,
  placeholder: 'Select Department'
});



NiceSelect.bind(selectExperience, {
  searchable: false,
  placeholder: 'Select Experience'
});

NiceSelect.bind(selectJobtype, {
  searchable: false,
  placeholder: 'Select Job Type'
});

NiceSelect.bind(selectEmploymenttype, {
  searchable: false,
  placeholder: 'Select Employment Type'
});

NiceSelect.bind(selectCurrency, {
  searchable: false,
  placeholder: '$ (USD)'
});

NiceSelect.bind(selectSalarytype, {
  searchable: false,
  placeholder: 'Select salary type'
});

NiceSelect.bind(selectCountry, {
  searchable: false,
  placeholder: 'Select Country'
});

NiceSelect.bind(selectState , {
  searchable: false,
  placeholder: 'Select State'
});
NiceSelect.bind(selectCity , {
  searchable: false,
  placeholder: 'Select City'
});