import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import {TodoItem} from "../TodoItem";

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {

};

TodoList.defaultProps = {

};
