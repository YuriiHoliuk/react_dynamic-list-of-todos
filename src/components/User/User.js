import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = (props) => {
  const { name } = props;

  return (
    <p>
      {name}
    </p>
  );
};

User.propTypes = {

};

User.defaultProps = {

};
