import React from 'react';
import * as Redux from 'react-redux';

import Todo from 'Todo';
import * as TodoAPI from 'TodoAPI';

export class TodoList extends React.Component {
 render() {
  var {todos, showCompleted, searchText} = this.props;
  var renderTodos = () => {
   var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

   if (filteredTodos.length === 0) {
     return (
      <p className="container__message">Nothing To Do</p>
     );
   }

   return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
    return <Todo key={todo.id} {...todo}/>;
   });
  };
  return (
   <div>
    {renderTodos()}
   </div>
  );
 }
};

export default Redux.connect(
 (state) => {
  return state;
 }
)(TodoList);
