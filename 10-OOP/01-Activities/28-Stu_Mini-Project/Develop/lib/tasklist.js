const Component = require('./component');

class TaskList extends Component {
    
  render() {
    return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
  }
}

module.exports = TaskList;