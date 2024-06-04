const Header = require('../../lib/components/header');

describe('Header class', () => {
  test('render() returns correct HTML', () => {
    const header = new Header();
    const html = header.render();
    // Add your assertions based on the expected HTML
    // For example, expect(html).toContain('<header class="header">');
  });
});