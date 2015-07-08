import sidebarToggleLines from '../sidebar-toggle.js';

var SIDEBAR_WIDTH = '320px';
var SIDEBAR_DISPLAY_DURATION = 300;

var sidebarToggleMotion = {
  toggleEl: $('.sidebar-toggle'),
  sidebarEl: $('.sidebar'),
  isSidebarVisible: false,
  init: function () {
    this.toggleEl.on('click', this.clickHandler.bind(this));
    this.toggleEl.on('mouseenter', this.mouseEnterHandler.bind(this));
    this.toggleEl.on('mouseleave', this.mouseLeaveHandler.bind(this));

    $(document)
      .on('sidebar.isShowing', () => {
        isDesktop() && $('body').velocity('stop').velocity(
          {paddingRight: SIDEBAR_WIDTH},
          SIDEBAR_DISPLAY_DURATION
        );
      })
      .on('sidebar.isHiding', function () {});

    //add motion effect to toc
    $('.sidebar-nav-toc') && $('.post-toc-wrap').addClass('motion-element');
  },
  clickHandler: function () {
    this.isSidebarVisible ? this.hideSidebar() : this.showSidebar();
    this.isSidebarVisible = !this.isSidebarVisible;
  },
  mouseEnterHandler: function () {
    if (this.isSidebarVisible) {
      return;
    }
    sidebarToggleLines.arrow();
  },
  mouseLeaveHandler: function () {
    if (this.isSidebarVisible) {
      return;
    }
    sidebarToggleLines.init();
  },
  showSidebar: function () {
    var self = this;

    sidebarToggleLines.close();

    this.sidebarEl.velocity('stop').velocity({width: SIDEBAR_WIDTH}, {
      display: 'block',
      duration: SIDEBAR_DISPLAY_DURATION,
      //将 sidebar 内容动画效果函数移动到这里
      begin: () => sidebarContentMotion(),
      complete: () => {
        self.sidebarEl.addClass('sidebar-active');
        self.sidebarEl.trigger('sidebar.didShow');
      }
    });

    this.sidebarEl.trigger('sidebar.isShowing');
  },
  hideSidebar: function () {
    isDesktop() && $('body').velocity('stop').velocity({paddingRight: 0});
    this.sidebarEl.find('.motion-element').velocity('stop').css('display','none');
    this.sidebarEl.velocity('stop').velocity({width: 0}, {display: 'none'});

    sidebarToggleLines.init();

    this.sidebarEl.removeClass('sidebar-active');
    this.sidebarEl.trigger('sidebar.isHiding');

    //在 post 页面下按下隐藏 sidebar 时如果当前选中的是“站点概览”，将 toc 去除 motion 效果
    //防止再次打开时会出现在“站点概览”下的 bug
    if(!!$('.post-toc-wrap')){
      if($('.site-overview').css('display') === 'block'){
        $('.post-toc-wrap').removeClass('motion-element');
      }
      // else {
      //   $('.post-toc-wrap').addClass('motion-element');
      // }
    }
  }
};


function sidebarContentMotion () {
  $('.sidebar .motion-element').velocity(
    'transition.slideRightIn',
    {stagger: 50, drag: true}
  );
}

export default sidebarToggleMotion;
