const TaskListItem = require('../../lib/components/taskListItem');


describe('TaskListItem class', () => {
  test('render() returns correct HTML', () => {
    const taskListItem = new TaskListItem(['Task 1']);
    const html = taskListItem.render();
    // Add your assertions based on the expected HTML
    // For example, expect(html).toContain('<li class="tasks-item">Task 1</li>');
  });

  test('render() includes "tasks-item-priority" class for priority task', () => {
    const priorityTaskListItem = new TaskListItem(['Priority Task'], true);
    const html = priorityTaskListItem.render();
    // Add your assertions based on the expected HTML
    // For example, expect(html).toContain('<li class="tasks-item tasks-item-priority">Priority Task</li>');
  });
});