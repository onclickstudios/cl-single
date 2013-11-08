var
hoquet = require('hoquet');

function cmpLayoutSingle(context) {
  return hoquet.render(
    ['html',
     {class:'cl cl-single'}
     ['head',
      context && context.title && ['title', context.title],
      context && context.head],
     ['body',
      context && context.body]]
  );
  
};

module.exports = cmpLayoutSingle;
