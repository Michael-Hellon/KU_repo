const TaskList = require('../../lib/components/taskList');

describe('TaskList class', () => {
  test('render() returns correct HTML', () => {
    const taskList = new TaskList();
    const html = taskList.render();
    // Add your assertions based on the expected HTML
    // For example, expect(html).toContain('<ul class="tasks"></ul>');
  });

  test('render() includes TaskListItem HTML for each task', () => {
    const tasks = [
      { text: 'Task 1' },
      { text: 'Task 2', priority: true },
    ];
    const taskList = new TaskList(tasks.map(task => new TaskListItem([task.text], task.priority)));
    const html = taskList.render();
    // Add your assertions based on the expected HTML
    // For example, expect(html).toContain('<li class="tasks-item">Task 1</li>');
    // And expect(html).toContain('<li class="tasks-item tasks-item-priority">Task 2</li>');
  });
});