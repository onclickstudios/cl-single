var
hoquet = require('hoquet');

function clSingle(context) {
  context = context || {};
  
  return hoquet.render(
    ['html',
     {class:'cl cl-single'},
     ['head',
      (context.title && ['title', context.title]),
      (context.head)],
     ['body',
      (context.body)]]
  );
  
};

module.exports = clSingle;
