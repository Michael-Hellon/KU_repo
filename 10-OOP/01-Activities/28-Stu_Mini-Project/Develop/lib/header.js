const Component = require('./component');
const { formatDate } = require('./date');

class Header extends Component {
  render() {
    // const currentDate = new Date().toLocaleDateString();
    return `<header class="header"><h1>Todo Today</h1><p>${currentDate}</p></header>`;
  }
}

module.exports = Header;