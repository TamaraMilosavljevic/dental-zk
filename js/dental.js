function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}