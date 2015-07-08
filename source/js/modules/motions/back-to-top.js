function backToTopMotion () {
  $('.back-to-top').on('click', () => $('body').velocity('scroll'));
}

export default backToTopMotion;
