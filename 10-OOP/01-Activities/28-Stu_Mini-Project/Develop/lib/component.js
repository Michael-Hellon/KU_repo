
class Component {
    constructor(children = []){
      this.children = children; 
    }
    render() {
      throw new error('Child class must implement render() method.');
    }
    renderInnerHTML() {
      return this.children.map(child => {
        (typeof child === 'string') ? child : child.render()}).join('');
      }
    }

module.exports = Component;
