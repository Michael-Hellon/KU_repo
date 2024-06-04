const TaskListItem = require('../lib/taskListItem.js');

describe('TaskListItem', () => {
    test('should render an <li> for a task', () => {
        const text = "nuqneH 'u'?";
        const expectedHtml = `<li class="tasks-item">${text}</li>`;
        const item = new TaskListItem([text]);
        expect(item.render()).toEqual(expectedHtml);
    })

    test('should render a priority task', () => {
        const text = 'Climb a mountain';
        const expectedHtml =
          '<li class="tasks-item tasks-item-priority">Climb a mountain</li>';
        const item = new TaskListItem([text], true);
        expect(item.render()).toEqual(expectedHtml);
      });
});
