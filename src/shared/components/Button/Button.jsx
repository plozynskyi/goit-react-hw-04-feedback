import PropTypes from 'prop-types';

import { ButtonMain } from './button.styled';

const Button = ({ children, onClick, type }) => {
  return (
    <ButtonMain onClick={onClick} type={type}>
      {children}
    </ButtonMain>
  );
};

export default Button;

Button.defaultProps = {
  type: 'submit',
};

Button.prototypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.element.isRequired,
};
