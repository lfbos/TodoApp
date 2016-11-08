var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
 beforeEach(() => {
  localStorage.removeItem('todos');
 });

 it('should exist', () => {
  expect(TodoAPI).toExist();
 });

 describe('filterTodos', () => {
  var todos = [{
   id: 1,
   text: 'Some text here',
   completed: true
  },
  {
   id: 2,
   text: 'Other text here',
   completed: false
  },
  {
   id: 3,
   text: 'Some text',
   completed: true
  }];

  it('should return all items if showCompleted is true', () => {
   var filteredTodos = TodoAPI.filterTodos(todos, true, '');
   expect(filteredTodos.length).toBe(3);
  });

  it('should return non-completed todos when showCompleted is false', () => {
   var filteredTodos = TodoAPI.filterTodos(todos, false, '');
   expect(filteredTodos.length).toBe(1);
  });

  it('should sort by completed status', () => {
   var filteredTodos = TodoAPI.filterTodos(todos, true, '');
   expect(filteredTodos[0].completed).toBe(false);
   expect(filteredTodos[1].completed).toBe(true);
   expect(filteredTodos[2].completed).toBe(true);
  });

  it('should filter todos by searchText', () => {
   var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
   expect(filteredTodos.length).toBe(2);
  });

  it('should return all todos if searchText is empty', () => {
   var filteredTodos = TodoAPI.filterTodos(todos, true, '');
   expect(filteredTodos.length).toBe(3);
  });
 });
});
