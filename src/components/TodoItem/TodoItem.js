import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import {User} from "../User";

export const TodoItem = (props) => {
  const { completed, user, title } = props;

  return (
    <li>
      <h2>{title}</h2>
      <p>{completed ? 'Done' : 'TODO'}</p>
      <User {...user} />
    </li>
  );
};

TodoItem.propTypes = {

};

TodoItem.defaultProps = {

};
