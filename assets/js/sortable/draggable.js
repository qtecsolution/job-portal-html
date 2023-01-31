const departmentlist = document.getElementById('departmentlist')
const stagelist = document.getElementById('stagelist')
const mailinglist = document.getElementById('mailinglist')

// STAGE-LIST
new Sortable(departmentlist, {
  animation: 150,
  ghostClass: 'blue-background-class'
})

// STAGE-LIST
new Sortable(stagelist, {
  animation: 150,
  ghostClass: 'blue-background-class'
})

// MAIL-LIST
new Sortable(mailinglist, {
  animation: 150,
  ghostClass: 'blue-background-class'
})