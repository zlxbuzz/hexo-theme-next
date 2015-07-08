function postsListMotion () {
  var postMotionOptions = window.postMotionOptions || {stagger: 300, drag: true};
  $('.post').velocity('transition.slideDownIn', postMotionOptions);
}

export default postsListMotion;
