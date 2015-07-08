function searchMotion () {
  var $searchForm = $('.site-search form');
  var $searchToggle = $('.site-search-toggle');

  if (isDesktop()) {
    $searchToggle.on('click', () => {
      $searchForm.velocity('stop').velocity({ top: 0 });
    });

    $(document).on('click', (event) => {
      !$(event.target).closest('.site-search').length && $searchForm.velocity('stop').velocity({ top: -50 });
    });
  }
}

export default searchMotion;
