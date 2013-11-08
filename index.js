var
hoquet = require('hoquet');

function cmpLayoutSingle(context) {
  return hoquet.render(
    ['html',
     ['head',
      context && context.title && ['title', context.title],
      context && context.head],
     ['body',
      {class:'cmp-layout-single'},
      context && context.body]]
  );
  
};

module.exports = cmpLayoutSingle;