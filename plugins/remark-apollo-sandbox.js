const visit = require('unist-util-visit');

module.exports = function remarkApolloSandbox() {
  return function transformer(tree) {
    visit(tree, 'html', (node) => {
      if (node.value.includes('<!--ApolloSandbox-->')) {
        node.value = '<ApolloSandbox />';
      }
    });
  };
};
