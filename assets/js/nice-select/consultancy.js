const selectSex = document.querySelector('#select-sex');
const consultSex = document.querySelector('#consult-sex');
const skintype = document.querySelector('#skintype');
const skinundertone = document.querySelector('#skinundertone');
const spendingrange = document.querySelector('#spendingrange');

NiceSelect.bind(selectSex, {
  searchable: false,
  placeholder: 'Female'
});

NiceSelect.bind(consultSex, {
  searchable: false,
  placeholder: 'Female'
});

NiceSelect.bind(skintype, {
  searchable: false,
  placeholder: 'Oily'
});

NiceSelect.bind(skinundertone, {
  searchable: false,
  placeholder: 'Warm'
});

NiceSelect.bind(spendingrange, {
  searchable: false,
  placeholder: 'Mid-range'
});

NiceSelect.bind(maritalstatus, {
  searchable: false,
  placeholder: 'Married'
});

NiceSelect.bind(pregnancystatus, {
  searchable: false,
  placeholder: 'Not Pregnant'
});