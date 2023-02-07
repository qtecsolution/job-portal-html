const selectPlace = document.querySelector('#jobstatus');
const selectMeeting = document.querySelector('#select-meeting');

const instance = NiceSelect.bind(selectPlace, {
  searchable: false,
  placeholder: 'select statue'
})

const instance2 = NiceSelect.bind(selectMeeting, {
  searchable: false,
  placeholder: 'select Meetig methods'
})

