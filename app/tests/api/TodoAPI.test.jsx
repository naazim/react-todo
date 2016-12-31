var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });


  describe('getTodos', () => {
    it('Should return empty array for bad localstorage data', () => {
      var actualData = TodoAPI.getTodos();
      expect(actualData).toEqual([]);
    });

    it('Should return todo if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos(todos);
      expect(actualTodos).toEqual(todos);
    });

  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'some text here',
      completed: true
    },{
      id: 2,
      text: 'some other text here',
      completed: false
    },{
      id: 3,
      text: 'another text here',
      completed: true
    }];

    it('should show all todos if completed is true', () => {
      var actualTodos = TodoAPI.filterTodos(todos, true, '');
      expect(actualTodos.length).toBe(3);
    });

    it('should not show all todos if completed is false', () => {
      var actualTodos = TodoAPI.filterTodos(todos, false, '');
      expect(actualTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var actualTodos = TodoAPI.filterTodos(todos, true, '');
      expect(actualTodos[0].completed).toBe(false);
    });

    it('should filter todo by searchText', () => {
      var actualTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(actualTodos.length).toBe(2);
    });

    it('should show all todos if searchText is null', () => {
      var actualTodos = TodoAPI.filterTodos(todos, true, '');
      expect(actualTodos.length).toBe(3);
    });

  });

});
