const { formatDate } = require('./date');
const Component = require('./component');

class Header extends Component {
    render() {
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`;
    }
}

module.exports = Header;
