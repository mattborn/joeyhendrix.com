const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

q('.button').forEach((el) =>
  el.addEventListener('click', (e) => {
    window.scrollTo({
      behavior: 'smooth',
      top: g('calendar').getBoundingClientRect().top + window.scrollY,
    })
  }),
)
