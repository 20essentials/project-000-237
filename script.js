document.addEventListener('click', e => {
  if (e.target.matches('.side')) {
    e.target.parentElement.classList.toggle('pause');
  }
  if (e.target.matches('.base')) {
    e.target.parentElement.classList.toggle('pause');
  }
});
