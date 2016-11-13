import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class AddTodo extends React.Component {
 constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleSubmit(e) {
  e.preventDefault();
  var {dispatch} = this.props;
  var text = this.refs.todoText.value;
  if (text) {
   this.refs.todoText.value = "";
   dispatch(actions.startAddTodo(text));
  } else {
   this.refs.todoText.focus();
  }

 }

 render() {
  return (
   <div className="container__footer">
    <form onSubmit={this.handleSubmit}>
     <input type="text" ref="todoText" placeholder="What do you need to do?"/>
     <button className="button expanded">Add Todo</button>
    </form>
   </div>
  );
 }
};

export default Redux.connect()(AddTodo);
