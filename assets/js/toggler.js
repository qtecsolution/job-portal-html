const actionButtons = document.querySelectorAll('.btn-action');

actionButtons.forEach(actionButton => {
  actionButton.addEventListener('click', toggleActions);
})


function toggleActions() {
  const action = this.parentElement;
  const actions = action.nextElementSibling;

  action.classList.add('d-none');
  actions.classList.remove('d-none');
}