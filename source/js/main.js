import * as helpers from './modules/helpers.js';
import * as sidebarMotion from './modules/motions/sidebar.js';
import logoMotion from './modules/motions/logo.js';
import menuMotion from './modules/motions/menu.js';
import backToTopMotion from './modules/motions/back-to-top.js';
import postsMotion from './modules/motions/postsList.js';

$(document).ready(function () {
  logoMotion();
  menuMotion();
  backToTopMotion();
  postsMotion();
  sidebarMotion.init();
});
