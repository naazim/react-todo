var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should show the same numbe of todos as passed', () => {
    var todos = [{
      id: 1,
      text: 'Read a book'
    },
    {
      id: 2,
      text: 'Write a letter'
    }];

    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

    expect(todoComponents.length).toBe(todos.length);
  });
});
