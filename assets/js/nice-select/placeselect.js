const selectPlace = document.querySelector('#select-places');

const instance = NiceSelect.bind(selectPlace, {
  searchable: false,
  placeholder: 'Select your preferred area'
});