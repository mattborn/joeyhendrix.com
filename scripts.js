const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

q('.button').forEach(el =>
  el.addEventListener('click', e => {
    window.scrollTo({
      behavior: 'smooth',
      top: g('calendar').getBoundingClientRect().top + window.scrollY,
    })
  }),
)

document.addEventListener('scroll', e => {
  const scrollDepth = window.scrollY / window.innerHeight

  let opacity
  if (scrollDepth <= 0.5) opacity = 0.5 + scrollDepth
  else opacity = 2 - (scrollDepth * 4) / 3

  g('glamour-shot').style.opacity = Math.max(0, Math.min(1, opacity))
})
