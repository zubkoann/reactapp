import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Button = ({
                  type, children, className, ...props
                }) => {
  const cn = classNames('Button', className);
  return (<button
          type={type}
          className={cn}
          {...props}
      >
        {children}
      </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func
};
Button.defaultProps = {
  className: '',
  style: {},
  type: 'button',
  onClick: null,

};
export default Button;