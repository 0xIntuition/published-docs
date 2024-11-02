const visit = require('unist-util-visit');

module.exports = function remarkApolloSandbox() {
  return function transformer(ast) {
    visit(ast, 'code', (node) => {
      if (node.lang === 'graphql-sandbox') {
        node.type = 'jsx';
        node.value = '<ApolloSandbox />';
      }
    });
  };
};
