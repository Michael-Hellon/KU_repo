const Component = require('./component');

class TaskList extends Component {
    constructor(children) {
        super(children);
    }

    render() {
        return `<ul class="tasks">${this.renderInnerHtml()}</ul>`;
    }
}

module.exports = TaskList;
