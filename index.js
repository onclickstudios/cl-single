var base = require('cmp-layout-base'),
    header = require('cmp-header-basic'),
    footer = require('cmp-footer-basic');

module.exports = function(c) {
  return base({
    title: "onclickstudios" + (c.title ? " &bull; " + c.title : ''),
    head: c.head,
    body: ["div",
      {class: "cmp-layout-single"},
      header(),
      c.body,
      footer()]
  });
}
