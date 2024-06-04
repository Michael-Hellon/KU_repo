const TaskListItem = require('../lib/components/taskListItem');describe('TaskListItem class', () => {
    
    describe('TasklistItem' () => {
        
    })
    test('render() returns correct HTML', () => {
      const taskListItem = new TaskListItem(['Task 1']);
      const html = taskListItem.render();