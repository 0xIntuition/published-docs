const visit = require('unist-util-visit');

function remarkApolloSandbox() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'graphql-sandbox') {
        node.type = 'jsx';
        node.value = `<EmbeddedSandbox />`;
      }
    });
  };
}

module.exports = remarkApolloSandbox;
