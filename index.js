var
hoquet = require('hoquet');

function clSingle(context) {
  return hoquet.render(
    ['html',
     {class:'cl cl-single'}
     ['head',
      (context && context.title && ['title', context.title]),
      (context && context.head)],
     ['body',
      (context && context.body)]]
  );
  
};

module.exports = clSingle;
