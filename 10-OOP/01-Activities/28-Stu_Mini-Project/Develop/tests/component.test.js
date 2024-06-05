const Component =  require('../lib/component');

describe('Component class', () => {
    test('render() throws an error when called directly', () => {
      const component = new Component();
      expect(() => {
        component.render();
      }).toThrow('Child class must implement render() method.');
    });
  });