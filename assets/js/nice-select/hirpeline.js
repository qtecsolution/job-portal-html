const selectPlace = document.querySelector('#pipeline');

const instance = NiceSelect.bind(selectPlace, {
  searchable: false,
  placeholder: 'Select Pipeline'
});