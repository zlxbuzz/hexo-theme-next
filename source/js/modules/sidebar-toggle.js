var sidebarToggleLines = {
  lines: [],
  push: function (line) {
    this.lines.push(line);
  },
  init: function () {
    for (let line of this.lines) {
      line.init();
    }
  },
  arrow: function () {
    for (let line of this.lines) {
      line.arrow();
    }
  },
  close: function () {
    for (let line of this.lines) {
      line.close();
    }
  }
};

class SidebarToggleLine {
  constructor(settings) {
    this.el = $(settings.el);
    this.status = $.extend({}, {
      init:  {width: '100%', opacity: 1, left: 0, rotateZ: 0, top: 0}
    }, settings.status);
  }

  init() {
    this.transform('init');
  }

  arrow() {
    this.transform('arrow');
  }

  close() {
    this.transform('close');
  }

  transform(status) {
    this.el.velocity('stop').velocity(this.status[status]);
  }
}


var sidebarToggleLine1st = new SidebarToggleLine({
  el: '.sidebar-toggle-line-first',
  status: {
    arrow: {width: '50%', rotateZ: '-45deg', top: '2px'},
    close: {width: '100%', rotateZ: '-45deg', top: '5px'}
  }
});
var sidebarToggleLine2nd = new SidebarToggleLine({
  el: '.sidebar-toggle-line-middle',
  status: {
    arrow: {width: '90%'},
    close: {opacity: 0}
  }
});
var sidebarToggleLine3rd = new SidebarToggleLine({
  el: '.sidebar-toggle-line-last',
  status: {
    arrow: {width: '50%', rotateZ: '45deg', top: '-2px'},
    close: {width: '100%', rotateZ: '45deg', top: '-5px'}
  }
});

sidebarToggleLines.push(sidebarToggleLine1st);
sidebarToggleLines.push(sidebarToggleLine2nd);
sidebarToggleLines.push(sidebarToggleLine3rd);

export default sidebarToggleLines;
